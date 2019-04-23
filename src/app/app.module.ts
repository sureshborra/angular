import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule ,route} from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';  
import { LoginModule } from './login/login.module';  
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';  
  
@NgModule({
  declarations: [
    AppComponent,
    route
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    LoginModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 