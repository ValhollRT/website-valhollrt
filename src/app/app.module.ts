import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Pages
import { HomeComponent } from './pages/home/home.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { SupportUsComponent } from './pages/support-us/support-us.component';
import { PlatformComponent } from './pages/platform/platform.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

//Ui
import { FooterComponent } from './ui/footer/footer.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { SectionComponent } from './ui/section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GetStartedComponent,
    SupportUsComponent,
    PlatformComponent,
    PageNotFoundComponent,
    FooterComponent,
    NavbarComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
