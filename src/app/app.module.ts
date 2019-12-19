import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './components/landing/landing.component';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const appRoutes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: 'portfolio', component: PortfolioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
    //other imports here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
