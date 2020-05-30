import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupportUsComponent } from './pages/support-us/support-us.component';
import { HomeComponent } from './pages/home/home.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { PlatformComponent } from './pages/platform/platform.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'platform', component: PlatformComponent },
  { path: 'get-started', component: GetStartedComponent },
  { path: 'support-us', component: SupportUsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home',  pathMatch: 'full' },
  { path: '**', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
