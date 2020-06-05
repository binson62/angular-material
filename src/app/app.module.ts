import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { HttpClientModule } from '@angular/common/http';

//Make sure you import the Angular Material modules after Angular's BrowserModule, as the import order matters for NgModules.
//https://medium.com/@ole.ersoy/angular-9-material-base-module-ef74d73e2b1a
//Components can no longer be imported through "@angular/material". Use the individual secondary entry-points, such as @angular/material/button.
import {   MatToolbarModule  } from  '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button'

import { AppRoutingModule } from './app-routing.module';

import { AccountListComponent } from './account-list/account-list.component';
import { AccountCreateComponent } from './account-create/account-create.component';

@NgModule({
  imports:      [ 
    BrowserModule, FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule ],
  declarations: [ AppComponent, HelloComponent, AccountListComponent, AccountCreateComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
