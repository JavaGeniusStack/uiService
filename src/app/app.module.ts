import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalenderComponent } from './calender/calender.component';
import { LoginComponent } from './login/login.component';
import { TimelineComponent } from './timeline/timeline.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { ListtodosComponent } from './listtodos/listtodos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent,
    LoginComponent,
    TimelineComponent,
    ErrorComponent,
   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterComponent,
    MenuComponent,
    FormsModule
    // WelcomeComponent,
    // ListtodosComponent
    //they are added to routing module as standalone component, so no need to add here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
