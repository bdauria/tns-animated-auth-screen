import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';

import { SessionModule } from './session/session.module';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
      SessionModule,
      NativeScriptModule,
      NativeScriptRouterModule,
      NativeScriptRouterModule.forRoot(routes),
      TNSFontIconModule.forRoot({
        'fa': 'font-awesome.css'
      })
    ]
})
export class AppModule { }

