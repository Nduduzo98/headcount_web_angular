import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { CompleteSurveyComponent } from './components/complete-survey/complete-survey.component';
import { ReportsNavComponent } from './Reports/reports-nav/reports-nav.component';
import { LoginComponent } from './Users/login/login.component';
import { RegisterComponent } from './Users/register/register.component';
import { SchoolGeneralComponent } from './modules/schoolgeneraldetails/school-general/school-general.component';
import { TestCompComponent } from './modules/schoolgeneraldetails/test-comp/test-comp.component';

import { BrowserUtils } from '@azure/msal-browser';
import { MsalGuard } from '@azure/msal-angular';

const routes: Routes = [
  {path: '', redirectTo: '/home' , pathMatch: 'full'},
  {path: 'home',component:HomePageComponent},
  {path:'survey',component:MainNavComponent},
  {path:'survey-complete',component:CompleteSurveyComponent},

  {path:'school/:emisNo',component:SchoolGeneralComponent},
  {path:'test/:emisNo',component:TestCompComponent}
];

const isIframe = window !== window.parent && !window.opener;
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // Don't perform initial navigation in iframes or popups
    initialNavigation:
      !BrowserUtils.isInIframe() && !BrowserUtils.isInPopup()
        ? "enabledNonBlocking"
        : "disabled", // Set to enabledBlocking to use Angular Universal
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
