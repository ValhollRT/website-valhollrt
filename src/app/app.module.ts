import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";


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
import { SuggestionBoardComponent } from './pages/suggestion-board/suggestion-board.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OdinComponent } from './pages/odin/odin.component';

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
    SectionComponent,
    SuggestionBoardComponent,
    OdinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
