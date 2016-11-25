import { NgModule } from '@angular/core';
import { SessionComponent } from './session.component';
import { LoginComponent } from './login/login.component';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';
import { RegisterComponent } from './register/register.component';
const {
  HintColorDirective
} = require('../directives/hint-color/hint-color.directive');
const {
  GradientBackgroundDirective
} = require('../directives/gradient-background/gradient-background.directive');

@NgModule({
  declarations: [
    SessionComponent,
    LoginComponent,
    RegisterComponent,
    HintColorDirective,
    GradientBackgroundDirective
  ],
  exports: [SessionComponent],
  imports: [
    TNSFontIconModule.forRoot({
    'fa': 'font-awesome.css'
  })],
  providers: []
})
export class SessionModule {}
