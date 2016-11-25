import { Component } from '@angular/core';
import { TNSFontIconService } from 'nativescript-ng2-fonticon';

@Component({
  selector: 'login',
  templateUrl: 'session/login/login.component.html',
  styleUrls: ['session/common.css']
})
export class LoginComponent {
  constructor(private fonticon: TNSFontIconService) {}
}
