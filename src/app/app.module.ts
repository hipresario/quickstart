import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';

import { HeroDetailComponent } from './hero/detail.component';
import { HeroesComponent } from './hero/heroes.component';
import { DashboardComponent } from './dashboard/component';
import { HeroSearchComponent } from './hero/search.component';

import { HeroService } from './hero/service';
import { LoginService } from './login/login.service';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    LoginComponent
  ],
  providers: [HeroService, LoginService],
  bootstrap: [AppComponent]
})


export class AppModule { }
