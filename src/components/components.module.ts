import { NgModule } from "@angular/core";
import { LoginFormComponent } from "./login-form/login-form";
import { DirectivesModule } from "../directives/directives.module";
import { ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { IonicModule } from "ionic-angular";
import { TransactionsContainerComponent } from "./transactions-container/transactions-container";
import { PendingContainerComponent } from "./pending-container/pending-container";
import { OffersContainerComponent } from "./offers-container/offers-container";
import { OffersItemComponent } from "./offers-container/offers-list/offers-item/offers-item";
import { LoaderComponent } from "./loader/loader";
import { SummaryContainerComponent } from './summary-container/summary-container';
import { ContainerHeaderComponent } from './container-header/container-header';
import { ContainerSubheaderComponent } from './container-subheader/container-subheader';
import { SummaryCardComponent } from './summary-container/summary-card/summary-card';
import { SummaryChartComponent } from './summary-container/summary-card/summary-chart/summary-chart';
import { SummaryTakingsComponent } from './summary-container/summary-card/summary-takings/summary-takings';
import { SummarySingleTakingComponent } from './summary-container/summary-card/summary-takings/summary-single-taking/summary-single-taking';
import { PendingListComponent } from './pending-container/pending-list/pending-list';
import { OffersListComponent } from './offers-container/offers-list/offers-list';
import { TransactionsListComponent } from './transactions-container/transactions-list/transactions-list';
import { TransactionItemComponent } from './transaction-item/transaction-item';
import { YummyListComponent } from './yummy-list/yummy-list';
import { YummyButtonComponent } from './yummy-button/yummy-button';
import { PendingModalProductComponent } from './pending-modal/pending-modal-product/pending-modal-product';
import { SupportModalComponent } from './support-modal/support-modal';
import { MediaModalComponent } from './media-modal/media-modal';
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  declarations: [
    LoginFormComponent,
    TransactionsContainerComponent,
    PendingContainerComponent,
    OffersContainerComponent,
    OffersItemComponent,
    SummaryContainerComponent,
    ContainerHeaderComponent,
    ContainerSubheaderComponent,
    SummaryCardComponent,
    SummaryChartComponent,
    SummaryTakingsComponent,
    SummarySingleTakingComponent,
    PendingListComponent,
    OffersListComponent,
    TransactionsListComponent,
    TransactionItemComponent,
    YummyListComponent,
    YummyButtonComponent,
    SupportModalComponent,
    MediaModalComponent
  ],
  imports: [
    IonicModule,
    DirectivesModule,
    ReactiveFormsModule,
    TranslateModule,
    NgxPaginationModule
  ],
  exports: [
    LoginFormComponent,
    TransactionsContainerComponent,
    PendingContainerComponent,
    OffersContainerComponent,
    OffersItemComponent,
    SummaryContainerComponent,
    ContainerHeaderComponent,
    ContainerSubheaderComponent,
    SummaryCardComponent,
    SummaryChartComponent,
    SummaryTakingsComponent,
    SummarySingleTakingComponent,
    PendingListComponent,
    OffersListComponent,
    TransactionsListComponent,
    TransactionItemComponent,
    YummyListComponent,
    YummyButtonComponent,
    SupportModalComponent,
    MediaModalComponent
  ]
})
export class ComponentsModule {}
