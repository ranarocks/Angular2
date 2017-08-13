import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './admin/registration/registration.component';
import { Routes, RouterModule } from '@angular/router';
import { UserregistrationComponent } from './user/userregistration/userregistration.component';
import { WelcomeComponent } from './admin/welcome/welcome.component';
import { UwelcomeComponent } from './user/uwelcome/uwelcome.component';
import { CommonService } from 'app/services/common.service'

export const routes: Routes = [
  { path: 'login', component: LoginComponent   },
  { path: 'register', component: RegistrationComponent },
  {path:'uregister', component: UserregistrationComponent},
  {path:'Welcome', component: WelcomeComponent},
  {path:'Uwelcome', component: UwelcomeComponent}
];

//export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserregistrationComponent,
    RegistrationComponent,
    WelcomeComponent,
    UwelcomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
