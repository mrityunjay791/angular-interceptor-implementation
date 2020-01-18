import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app-component/app.component';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';

import { FormsModule } from '@angular/forms';
import {HttpModule, Http, XHRBackend, RequestOptions} from '@angular/http';
// import { HttpClientModule } from '@angular/common/http';


import {httpFactory} from "./service/http.factory";
import { DataService } from './service/data.service';
import { InterceptorService } from './service/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    // HttpClientModule,
    FormsModule
  ],
  providers: [
    DataService,
    InterceptorService,
    {
      provide: InterceptorService,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
