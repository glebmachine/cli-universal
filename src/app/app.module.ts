import { IndexComponent } from './index/index.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', loadChildren: './index/index.module.ts#IndexModule' },
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'}
    ])
  ],
  exports: [ AppComponent ]
})
export class AppModule { }
