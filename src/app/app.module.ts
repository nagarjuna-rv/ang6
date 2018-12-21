import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from '@app/shared-module/shared-module.module';
import { appRouter } from '@app/app.router';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppInterceptor } from '@app/utill/interceptors/http-interceptor';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    appRouter,
    SharedModuleModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [HttpClient,{
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
  }],
  exports: [FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
