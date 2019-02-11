import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRouteModule } from './RouteFolder/app.route.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistationComponent } from './user-registation/user-registation.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegistationComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    // ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
