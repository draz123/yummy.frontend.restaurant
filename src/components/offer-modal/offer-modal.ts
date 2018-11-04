import { take, map } from "rxjs/operators";
import { Component, ViewChild, ElementRef } from "@angular/core";
import * as fromActions from "../../core/actions/offer-form.actions";
import * as fromModalActions from "../../core/actions/_modal.actions";
import * as fromOfferActions from "../../core/actions/offer.actions";
import { NavParams } from "ionic-angular";
import { Store } from "@ngrx/store";
import { AppState } from "../../core/app-state";
import { Observable, Subscription } from "rxjs";
import { Offer } from "../../core/models/offer";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { OfferForm } from "../../core/models/offer-form";

@Component({
  selector: "offer-modal",
  templateUrl: "offer-modal.html"
})
export class OfferModalComponent {
  @ViewChild("image")
  public image: ElementRef;
  public isImage: boolean = false;
  public form$: Observable<Offer>;
  public form: FormGroup;
  public meta: Offer;

  constructor(
    private navParams: NavParams,
    private store: Store<AppState>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  public onImageChange(event: any): void {
    const file = event.target.files[0];
    const getBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    };
    getBase64(file)
      .then((base64: string) => {
        this.isImage = true;
        this.image.nativeElement.src = base64;
      })
      .catch(() => this.clearImage());
  }

  public clearImage(): void {
    this.isImage = false;
  }

  private initForm(): void {
    let tempForm: any = new Offer();
    Object.keys(tempForm).map(function(key, index) {
      tempForm[key] = ["", Validators.required];
    });
    tempForm['discountMetric'] = ["PERCENTAGE", Validators.required];
    this.form = this.formBuilder.group(tempForm);
    this.subscribeDiscount();
    this.connectOffer().then(() => {
      this.form$ = this.store.select((state) => state.offerForm.data);
    });
  }

  private connectOffer(): Promise<void> {
    return new Promise((resolve) => {
      if (this.navParams.get("id")) {
        this.store
          .select((state) => state.offer.data)
          .pipe(
            map(
              (offers: Offer[]) =>
                offers.find(
                  (singleOffer: Offer) =>
                    singleOffer.id === this.navParams.get("id")
                ) || new Offer()
            ),
            take(1)
          )
          .subscribe((offer: Offer) => {
            this.store.dispatch(new fromActions.UpdateForm([offer, offer]));
            resolve();
          });
      } else {
        resolve();
      }
    });
  }

  private subscribeDiscount(): void {
    const sub = this.form.valueChanges.subscribe((form: OfferForm) => {
      const { discount, price } = form;
      discount && price && this.handleDiscount(form as any, sub);
    });
  }

  private handleDiscount({ discount, price, discountMetric }, sub: Subscription): void {
    sub.unsubscribe();
    this.form.setValue({
      ...this.form.value,
      calculatedPrice:  (discountMetric === "PERCENTAGE")
        ? Math.round((price * (100 - discount)) / 10) / 10
        : price - discount
    });
    this.subscribeDiscount();
  }

  public submit(): void {
    const form: OfferForm = this.isImage
      ? {
          ...this.form.value,
          image: this.image.nativeElement.src
        }
      : this.form.value;
    this.store.dispatch(
      new fromActions.SubmitForm({
        data: form
      })
    );
  }

  public delete(): void {
    this.close();
    this.store.dispatch(new fromOfferActions.DeleteOffer(this.form.value));
  }

  public close(): void {
    this.store.dispatch(new fromActions.UpdateForm(new Offer()))
    this.store.dispatch(new fromModalActions.Hide());
  }
}
