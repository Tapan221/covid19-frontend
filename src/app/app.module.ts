import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DonationComponent } from './donation/donation.component';
import { ContibutionComponent } from './contibution/contibution.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule} from '@angular/forms';
import { ApiService } from './service/api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { BasicHttpIntercepterService } from './service/basic-http-intercepter.service';
import { SaveDonationComponent } from './save-donation/save-donation.component';
import { SaveContributionComponent } from './save-contribution/save-contribution.component';
import { IndivisualContributionComponent } from './indivisual-contribution/indivisual-contribution.component';
import { MessageBoxComponent } from './utility/message-box/message-box.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DonationComponent,
    ContibutionComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    LogoutComponent,
    SaveDonationComponent,
    SaveContributionComponent,
    IndivisualContributionComponent,
    MessageBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    {  
      provide:HTTP_INTERCEPTORS, useClass:BasicHttpIntercepterService, multi:true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
