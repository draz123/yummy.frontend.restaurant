import { NgModule } from "@angular/core";
import { LoginFormComponent } from "./login-form/login-form";
import { DirectivesModule } from "../directives/directives.module";
import { ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { IonicModule } from "ionic-angular";
import { TransactionsContainerComponent } from "./transactions-container/transactions-container";
import { PendingContainerComponent } from "./pending-container/pending-container";
import { OffersContainerComponent } from "./offers-container/offers-container";
import { UserPanelComponent } from "./user-panel/user-panel";
import { OffersItemComponent } from "./offers-item/offers-item";
import { LoaderComponent } from "./loader/loader";
import { SummaryContainerComponent } from './summary-container/summary-container';
import { ContainerHeaderComponent } from './container-header/container-header';
import { ContainerSubheaderComponent } from './container-subheader/container-subheader';
import { SummaryCardComponent } from './summary-card/summary-card';
import { SummaryChartComponent } from './summary-chart/summary-chart';
import { SummaryProgressComponent } from './summary-progress/summary-progress';

@NgModule({
  declarations: [
    LoginFormComponent,
    TransactionsContainerComponent,
    PendingContainerComponent,
    OffersContainerComponent,
    UserPanelComponent,
    OffersItemComponent,
    SummaryContainerComponent,
    ContainerHeaderComponent,
    ContainerSubheaderComponent,
    SummaryCardComponent,
    SummaryChartComponent,
    SummaryProgressComponent
  ],
  imports: [
    IonicModule,
    DirectivesModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [
    LoginFormComponent,
    TransactionsContainerComponent,
    PendingContainerComponent,
    OffersContainerComponent,
    UserPanelComponent,
    OffersItemComponent,
    SummaryContainerComponent,
    ContainerHeaderComponent,
    ContainerSubheaderComponent,
    SummaryCardComponent,
    SummaryChartComponent,
    SummaryProgressComponent
  ]
})
export class ComponentsModule {}
