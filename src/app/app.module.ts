import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Observable, from, of } from 'rxjs';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { filter, map, take, concatMap, tap, delay } from 'rxjs/operators';

import { AppComponent } from './app.component';

import { Component } from '@angular/core';

@Component({
    selector: 'my-app-proxy-route',
    template: 'proxy <router-outlet></router-outlet>',
})
export class ProxyRouteComponent {
}

const appRoutes: Routes = [
  { 
    path: '',
    component: ProxyRouteComponent,
    // outlet: 'header',
    children: [
      { 
        path: '',
        loadChildren: './header.module#HeaderModule'
      },
    ]
  },
  { 
    path: '',
    component: ProxyRouteComponent,
    // outlet: 'content',
    children: [
      { 
        path: '',
        loadChildren: './content.module#ContentModule'
      },
    ]
  }
];

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
  ],
  providers: [
  ],
  declarations: [ AppComponent, ProxyRouteComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
