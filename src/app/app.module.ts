import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListComponent } from './movies/list/list.component';
import { AddComponent } from './movies/add/add.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  // { path: '', component: AppComponent },
  {
    path: 'movies',
    children: [
      { path: '', component: ListComponent },
      // { path: ':id/edit', component: ProductEditComponent },
      { path: 'add', component: AddComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
