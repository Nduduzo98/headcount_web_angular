import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatStepperModule} from '@angular/material/stepper';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TCPopupComponent } from './components/t-c-popup/t-c-popup.component';
import { EnterEmisComponent } from './components/enter-emis/enter-emis.component';
import { NgToastModule } from 'ng-angular-popup';
import { PopiaComponent } from './components/popia/popia.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { OtpComponent } from './components/otp/otp.component';
import { SchoolGeneralComponent } from './modules/schoolgeneraldetails/school-general/school-general.component';
import { SchoolGeneralEditComponent } from './modules/schoolgeneraldetails/school-general-edit/school-general-edit.component';
import { LearnersPerclassComponent } from './modules/learners&classes/learners-perclass/learners-perclass.component';
import { LearnersPerclassEditComponent } from './modules/learners&classes/learners-perclass-edit/learners-perclass-edit.component';
import { RepeatersComponent } from './modules/repeatersByGender&Gr/repeaters/repeaters.component';
import { RepeatersEditComponent } from './modules/repeatersByGender&Gr/repeaters-edit/repeaters-edit.component';
import { HomeLanguageComponent } from './modules/SchoolHomeLanguages/home-language/home-language.component';
import { HomeLanguageEditComponent } from './modules/SchoolHomeLanguages/home-language-edit/home-language-edit.component';
import { SessionService } from './services/session.service';
import { AppInterceptor } from './services/app.interceptor';
import { MigrationsComponent } from './modules/migrations/migrations/migrations.component';
import { MigrationsEditComponent } from './modules/migrations/migrations-edit/migrations-edit.component';
import { PersonnelComponent } from './modules/personnelInfo/personnel/personnel.component';
import { PersonnelEditComponent } from './modules/personnelInfo/personnel-edit/personnel-edit.component';
import { PregnantComponent } from './modules/pregnant/pregnant/pregnant.component';
import { PregnantEditComponent } from './modules/pregnant/pregnant-edit/pregnant-edit.component';
import { SubmitPopiComponent } from './components/submit-popi/submit-popi.component';
import { CompleteSurveyComponent } from './components/complete-survey/complete-survey.component';
import { SchoolGeneralCheckComponent } from './modules/schoolgeneraldetails/school-general-check/school-general-check.component';
import { DisabilityComponent } from './modules/disability/disability/disability.component';
import { DisabilityEditComponent } from './modules/disability/disability-edit/disability-edit.component';
import { ReportsNavComponent } from './Reports/reports-nav/reports-nav.component';
import { LoginComponent } from './Users/login/login.component';
import { RegisterComponent } from './Users/register/register.component';
import { AllDistrictsComponent } from './Reports/charts/all-districts/all-districts.component';
import { EkurhuleniComponent } from './Reports/charts/ekurhuleni/ekurhuleni.component';
import { GautengComponent } from './Reports/charts/gauteng/gauteng.component';
import { JohannesburgComponent } from './Reports/charts/johannesburg/johannesburg.component';
import { SedibengComponent } from './Reports/charts/sedibeng/sedibeng.component';
import { TshwaneComponent } from './Reports/charts/tshwane/tshwane.component';
import { DistrictOfficialComponent } from './Reports/DistrictOfficial/district-official/district-official.component';
import { InProgressComponent } from './Reports/DistrictOfficial/in-progress/in-progress.component';
import { CompletedComponent } from './Reports/DistrictOfficial/completed/completed.component';
import { NotStartedComponent } from './Reports/DistrictOfficial/not-started/not-started.component';
import { CentralComponent } from './Reports/charts/johannesburg/central/central.component';
import { CentralCompletedComponent } from './Reports/charts/johannesburg/central/central-completed/central-completed.component';
import { CentralInprogressComponent } from './Reports/charts/johannesburg/central/central-inprogress/central-inprogress.component';
import { CentralNotstartedComponent } from './Reports/charts/johannesburg/central/central-notstarted/central-notstarted.component';
import { EastJhbComponent } from './Reports/charts/johannesburg/east-jhb/east-jhb.component';
import { NorthJhbComponent } from './Reports/charts/johannesburg/north-jhb/north-jhb.component';
import { SouthJhbComponent } from './Reports/charts/johannesburg/south-jhb/south-jhb.component';
import { WestJhbComponent } from './Reports/charts/johannesburg/west-jhb/west-jhb.component';
import { EastNotstartedComponent } from './Reports/charts/johannesburg/east-jhb/east-notstarted/east-notstarted.component';
import { EastCompletedComponent } from './Reports/charts/johannesburg/east-jhb/east-completed/east-completed.component';
import { EastInprogressComponent } from './Reports/charts/johannesburg/east-jhb/east-inprogress/east-inprogress.component';
import { NorthInprogressComponent } from './Reports/charts/johannesburg/north-jhb/north-inprogress/north-inprogress.component';
import { NorthCompletedComponent } from './Reports/charts/johannesburg/north-jhb/north-completed/north-completed.component';
import { NorthNotstartedComponent } from './Reports/charts/johannesburg/north-jhb/north-notstarted/north-notstarted.component';
import { SouthNotstartedComponent } from './Reports/charts/johannesburg/south-jhb/south-notstarted/south-notstarted.component';
import { SouthCompletedComponent } from './Reports/charts/johannesburg/south-jhb/south-completed/south-completed.component';
import { SouthInprogressComponent } from './Reports/charts/johannesburg/south-jhb/south-inprogress/south-inprogress.component';
import { WestInprogressComponent } from './Reports/charts/johannesburg/west-jhb/west-inprogress/west-inprogress.component';
import { WestCompletedComponent } from './Reports/charts/johannesburg/west-jhb/west-completed/west-completed.component';
import { WestNotstartedComponent } from './Reports/charts/johannesburg/west-jhb/west-notstarted/west-notstarted.component';
import { SubmissionStatsComponent } from './Reports/charts/submission-stats/submission-stats.component';
import { CentralSubmissionStatComponent } from './Reports/charts/johannesburg/central/central-submission-stat/central-submission-stat.component';
import { EastSubmissionStatComponent } from './Reports/charts/johannesburg/east-jhb/east-submission-stat/east-submission-stat.component';
import { NorthSubmissionStatComponent } from './Reports/charts/johannesburg/north-jhb/north-submission-stat/north-submission-stat.component';
import { SouthSubmissionStatComponent } from './Reports/charts/johannesburg/south-jhb/south-submission-stat/south-submission-stat.component';
import { WestSubmissionStatComponent } from './Reports/charts/johannesburg/west-jhb/west-submission-stat/west-submission-stat.component';
import { EkurhuleniNorthComponent } from './Reports/charts/ekurhuleni/ekurhuleni-north/ekurhuleni-north.component';
import { EkurhuleniSouthComponent } from './Reports/charts/ekurhuleni/ekurhuleni-south/ekurhuleni-south.component';
import { EnSubmissionStatComponent } from './Reports/charts/ekurhuleni/ekurhuleni-north/en-submission-stat/en-submission-stat.component';
import { EnNotstartedComponent } from './Reports/charts/ekurhuleni/ekurhuleni-north/en-notstarted/en-notstarted.component';
import { EnCompletedComponent } from './Reports/charts/ekurhuleni/ekurhuleni-north/en-completed/en-completed.component';
import { EnInprogressComponent } from './Reports/charts/ekurhuleni/ekurhuleni-north/en-inprogress/en-inprogress.component';
import { EsInprogressComponent } from './Reports/charts/ekurhuleni/ekurhuleni-south/es-inprogress/es-inprogress.component';
import { EsCompletedComponent } from './Reports/charts/ekurhuleni/ekurhuleni-south/es-completed/es-completed.component';
import { EsNotstartedComponent } from './Reports/charts/ekurhuleni/ekurhuleni-south/es-notstarted/es-notstarted.component';
import { EsSubmissionStatComponent } from './Reports/charts/ekurhuleni/ekurhuleni-south/es-submission-stat/es-submission-stat.component';
import { GautengNorthComponent } from './Reports/charts/gauteng/gauteng-north/gauteng-north.component';
import { GautengWestComponent } from './Reports/charts/gauteng/gauteng-west/gauteng-west.component';
import { GautengEastComponent } from './Reports/charts/gauteng/gauteng-east/gauteng-east.component';
import { GeSubmissionStatComponent } from './Reports/charts/gauteng/gauteng-east/ge-submission-stat/ge-submission-stat.component';
import { GeNotstartedComponent } from './Reports/charts/gauteng/gauteng-east/ge-notstarted/ge-notstarted.component';
import { GeCompletedComponent } from './Reports/charts/gauteng/gauteng-east/ge-completed/ge-completed.component';
import { GeInprogressComponent } from './Reports/charts/gauteng/gauteng-east/ge-inprogress/ge-inprogress.component';
import { GnInprogressComponent } from './Reports/charts/gauteng/gauteng-north/gn-inprogress/gn-inprogress.component';
import { GnCompletedComponent } from './Reports/charts/gauteng/gauteng-north/gn-completed/gn-completed.component';
import { GnNotstartedComponent } from './Reports/charts/gauteng/gauteng-north/gn-notstarted/gn-notstarted.component';
import { GnSubmissionStatComponent } from './Reports/charts/gauteng/gauteng-north/gn-submission-stat/gn-submission-stat.component';
import { GwSubmissionStatComponent } from './Reports/charts/gauteng/gauteng-west/gw-submission-stat/gw-submission-stat.component';
import { GwNotstartedComponent } from './Reports/charts/gauteng/gauteng-west/gw-notstarted/gw-notstarted.component';
import { GwCompletedComponent } from './Reports/charts/gauteng/gauteng-west/gw-completed/gw-completed.component';
import { GwInprogressComponent } from './Reports/charts/gauteng/gauteng-west/gw-inprogress/gw-inprogress.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http"; // Import


import { MsalGuard, MsalModule, MsalRedirectComponent,MsalInterceptor } from "@azure/msal-angular";
import { InteractionType, PublicClientApplication } from "@azure/msal-browser";
import { SedibengEastComponent } from './Reports/charts/sedibeng/sedibeng-east/sedibeng-east.component';
import { SedibengWestComponent } from './Reports/charts/sedibeng/sedibeng-west/sedibeng-west.component';
import { SeCompletedComponent } from './Reports/charts/sedibeng/sedibeng-east/se-completed/se-completed.component';
import { SeInprogressComponent } from './Reports/charts/sedibeng/sedibeng-east/se-inprogress/se-inprogress.component';
import { SeNotstartedComponent } from './Reports/charts/sedibeng/sedibeng-east/se-notstarted/se-notstarted.component';
import { SeSubmissionStatComponent } from './Reports/charts/sedibeng/sedibeng-east/se-submission-stat/se-submission-stat.component';
import { SwSubmissionStatComponent } from './Reports/charts/sedibeng/sedibeng-west/sw-submission-stat/sw-submission-stat.component';
import { SwNotstartedComponent } from './Reports/charts/sedibeng/sedibeng-west/sw-notstarted/sw-notstarted.component';
import { SwInprogressComponent } from './Reports/charts/sedibeng/sedibeng-west/sw-inprogress/sw-inprogress.component';
import { SwCompletedComponent } from './Reports/charts/sedibeng/sedibeng-west/sw-completed/sw-completed.component';
import { TestCompComponent } from './modules/schoolgeneraldetails/test-comp/test-comp.component';
import { CheckOtpComponent } from './components/otp/check-otp/check-otp.component';
import { LearnerMortalityComponent } from './modules/learnersMortality/learner-mortality/learner-mortality.component';
import { LearnerMortalityEditComponent } from './modules/learnersMortality/learner-mortality-edit/learner-mortality-edit.component';
import { PersonnelMortalityComponent } from './modules/personnelMortality/personnel-mortality/personnel-mortality.component';
import { PersonnelMortalityEditComponent } from './modules/personnelMortality/personnel-mortality-edit/personnel-mortality-edit.component';
import { NoScrollDirective } from './components/no-scroll.directive';
import { DisableArrowsDirective } from './components/disable-arrows.directive';
import { ResetToZeroDirective } from './components/reset-to-zero.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TCPopupComponent,
    EnterEmisComponent,
    PopiaComponent,
    MainNavComponent,
    OtpComponent,
    SchoolGeneralComponent,
    SchoolGeneralEditComponent,
    LearnersPerclassComponent,
    LearnersPerclassEditComponent,
    RepeatersComponent,
    RepeatersEditComponent,
    HomeLanguageComponent,
    HomeLanguageEditComponent,
    MigrationsComponent,
    MigrationsEditComponent,
    PersonnelComponent,
    PersonnelEditComponent,
    PregnantComponent,
    PregnantEditComponent,
    SubmitPopiComponent,
    CompleteSurveyComponent,
    SchoolGeneralCheckComponent,
    DisabilityComponent,
    DisabilityEditComponent,
    ReportsNavComponent,
    LoginComponent,
    RegisterComponent,
    AllDistrictsComponent,
    EkurhuleniComponent,
    GautengComponent,
    JohannesburgComponent,
    SedibengComponent,
    TshwaneComponent,
    DistrictOfficialComponent,
    InProgressComponent,
    CompletedComponent,
    NotStartedComponent,
    CentralComponent,
    CentralCompletedComponent,
    CentralInprogressComponent,
    CentralNotstartedComponent,
    EastJhbComponent,
    NorthJhbComponent,
    SouthJhbComponent,
    WestJhbComponent,
    EastNotstartedComponent,
    EastCompletedComponent,
    EastInprogressComponent,
    NorthInprogressComponent,
    NorthCompletedComponent,
    NorthNotstartedComponent,
    SouthNotstartedComponent,
    SouthCompletedComponent,
    SouthInprogressComponent,
    WestInprogressComponent,
    WestCompletedComponent,
    WestNotstartedComponent,
    SubmissionStatsComponent,
    CentralSubmissionStatComponent,
    EastSubmissionStatComponent,
    NorthSubmissionStatComponent,
    SouthSubmissionStatComponent,
    WestSubmissionStatComponent,
    EkurhuleniNorthComponent,
    EkurhuleniSouthComponent,
    EnSubmissionStatComponent,
    EnNotstartedComponent,
    EnCompletedComponent,
    EnInprogressComponent,
    EsInprogressComponent,
    EsCompletedComponent,
    EsNotstartedComponent,
    EsSubmissionStatComponent,
    GautengNorthComponent,
    GautengWestComponent,
    GautengEastComponent,
    GeSubmissionStatComponent,
    GeNotstartedComponent,
    GeCompletedComponent,
    GeInprogressComponent,
    GnInprogressComponent,
    GnCompletedComponent,
    GnNotstartedComponent,
    GnSubmissionStatComponent,
    GwSubmissionStatComponent,
    GwNotstartedComponent,
    GwCompletedComponent,
    GwInprogressComponent,
    SedibengEastComponent,
    SedibengWestComponent,
    SeCompletedComponent,
    SeInprogressComponent,
    SeNotstartedComponent,
    SeSubmissionStatComponent,
    SwSubmissionStatComponent,
    SwNotstartedComponent,
    SwInprogressComponent,
    SwCompletedComponent,
    TestCompComponent,
    CheckOtpComponent,
    LearnerMortalityComponent,
    LearnerMortalityEditComponent,
    PersonnelMortalityComponent,
    PersonnelMortalityEditComponent,
    NoScrollDirective,
    DisableArrowsDirective,
    ResetToZeroDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule,
    MatDatepickerModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule,
    MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
    MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule,
    MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule,MatStepperModule,NgToastModule,



    

      ],
      providers: [HomePageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
