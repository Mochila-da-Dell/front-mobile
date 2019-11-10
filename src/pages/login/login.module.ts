import { NgModule } from "@angular/core";
import { LoginPage } from "./login";
import {IonicPageModule } from 'ionic-angular/module';

@NgModule({
    declarations: [
        LoginPage
    ],
    imports: [
        IonicPageModule.forChild(LoginPage)
    ],
    exports:[
        LoginPage       
    ]
})
export class LoginModule{
}