import { BrowserModule } from '@angular/platform-browser';
import { NgModule , NO_ERRORS_SCHEMA} from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { GenderComponent } from './questions/gender/gender.component';
import { ActivityComponent } from './questions/activity/activity.component';
import { HeroComponent } from './hero/hero.component';

const appRoutes: Routes = [
  //{ path: 'hero/:id',      component: HeroDetailComponent },
  { path: 'home', component: HomeComponent, data: { title: 'Heroes List' } },
  { path: 'hero/:id',      component: HeroComponent },
  { path: 'gender', component: GenderComponent },
  { path: 'activity', component: ActivityComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    GenderComponent,
    HeroComponent,
    ActivityComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    HttpClientModule,
    FormsModule,
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
