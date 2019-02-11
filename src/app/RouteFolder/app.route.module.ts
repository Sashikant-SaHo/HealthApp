import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { UserLoginComponent } from '../user-login/user-login.component';
import { UserRegistationComponent } from '../user-registation/user-registation.component';

const appRoutes:Routes=[
    {path:"Login",component:UserLoginComponent,pathMatch:'full'},
    {path:'Register',component:UserRegistationComponent,pathMatch:'full'},
    {path:'',redirectTo:'/Login',pathMatch:'full'},
    {path:'**',redirectTo:'/Login',pathMatch:'full'}
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})


export class AppRouteModule {
}
