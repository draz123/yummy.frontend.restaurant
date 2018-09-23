import { Component, ViewChild, ElementRef } from "@angular/core";
import * as fromActions from "../../core/actions/offer-form.actions";
import * as fromModalActions from "../../core/actions/_modal.actions";
import * as fromOfferActions from "../../core/actions/offer.actions";
import { NavParams } from "ionic-angular";
import { Store } from "@ngrx/store";
import { AppState } from "../../core/app-state";
import { Observable } from "rxjs";
import { Offer } from "../../core/models/offer";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { OfferForm } from "../../core/models/offer-form";

@Component({
  selector: "offer-modal",
  templateUrl: "offer-modal.html"
})
export class OfferModalComponent {
  @ViewChild('image') image: ElementRef;
  private form$: Observable<Offer>;
  private form: FormGroup;
  private meta: Offer;

  constructor(
    private navParams: NavParams,
    private store: Store<AppState>,
    private formBuilder: FormBuilder
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    if (this.navParams.get("id")) {
      this.connectOffer(this.navParams.get("id"));
    }
  }

  onImageChange(event) {
    const file = event.target.files[0];
    const getBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    }
    getBase64(file).then((base64: string) => {
      this.image.nativeElement.src = base64;
    });
  }

  initForm(): void {
    let tempForm: any = new Offer();
    Object.keys(tempForm).map(function(key, index) {
      tempForm[key] = ["", Validators.required];
    });
    this.form = this.formBuilder.group(tempForm);
  }

  initMeta(offer: Offer): void {
    this.meta = offer;
  }

  connectOffer(id: string): void {
    this.store
      .select((state) => state.offer.data)
      .map((offers: Offer[]) =>
        offers.find((singleOffer: Offer) => singleOffer.id === id) || new Offer()
      )
      .take(1)
      .subscribe((offer: Offer) => {
        this.initMeta(offer);
        this.store.dispatch(new fromActions.UpdateForm([offer, offer]));
        this.form$ = this.store.select((state) => state.offerForm.data);
        this.connectForm();
      });
  }

  connectForm(): void {
    this.form$.subscribe((offerForm: OfferForm) => {
      let tempForm: any = new Offer();
      Object.keys(offerForm).map(function(key, index) {
        tempForm[key] = [offerForm[key] || "", Validators.required];
      });
      this.form = this.formBuilder.group(tempForm);
      this.observeChanges();
    });
  }

  observeChanges(): void {
    let prevState = this.form.value;
    this.form.valueChanges.subscribe((currState) => {
      this.dispatchChanges([prevState, currState]);
      prevState = currState;
    });
  }

  dispatchChanges(state: OfferForm[]): void {
    this.store.dispatch(new fromActions.UpdateForm(state));
  }

  submit(): void {
    this.close();
    this.store.dispatch(
      new fromActions.SubmitForm({
        data: this.form.value
      })
    );
  }

  delete(): void {
    this.close();
    this.store.dispatch(new fromOfferActions.DeleteOffer(this.form.value));
  }

  close(): void {
    this.store.dispatch(new fromModalActions.Hide());
  }
}
