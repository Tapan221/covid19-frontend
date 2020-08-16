import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DonationComponent } from './donation/donation.component';
import { ContibutionComponent } from './contibution/contibution.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-guard.service';
import { SaveDonationComponent } from './save-donation/save-donation.component';
import { SaveContributionComponent } from './save-contribution/save-contribution.component';
import { IndivisualContributionComponent } from './indivisual-contribution/indivisual-contribution.component';


const routes: Route[] = [
{path:'',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'logout',component:LogoutComponent,canActivate:[AuthGaurdService]},
{path:'registration',component:RegistrationComponent},
{path:'home',component:HomeComponent},
{path:'saveDonation',component:SaveDonationComponent,canActivate:[AuthGaurdService]},
{path:'saveContribution',component:SaveContributionComponent,canActivate:[AuthGaurdService]},
{path:'donation',component:DonationComponent},
{path:'contribution',component:ContibutionComponent,canActivate:[AuthGaurdService]},
{path:'personalContribution',component:IndivisualContributionComponent,canActivate:[AuthGaurdService]},
{path:'**',component:PageNotFoundComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
