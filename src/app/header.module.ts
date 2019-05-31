import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
    selector: 'my-app-header',
    template: '## HeaderComponent',
})
export class HeaderComponent {
}

const routes: Routes = [
  { path: '', component: HeaderComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ HeaderComponent ],
  entryComponents: [ HeaderComponent ],
  exports:[],
  providers: []
})
export class HeaderModule { }