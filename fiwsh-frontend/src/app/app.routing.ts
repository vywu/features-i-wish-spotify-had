/**
 * Created by vw on 2017-08-21.
 */
import {Routes,RouterModule} from "@angular/router";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {AUTH_ROUTES} from "./authentication/authentication.routing";
import {UserComponent} from "./user/user.component";
import {USER_ROUTES} from "./user/user.routing";

const APP_ROUTES:Routes=[
  // {path:'',redirectTo:'/authentication',pathMatch:'full'},
  {path:'authentication',component:AuthenticationComponent,children:AUTH_ROUTES},
  {path:'user',component:UserComponent,children:USER_ROUTES}
];
export const routing=RouterModule.forRoot(APP_ROUTES);

