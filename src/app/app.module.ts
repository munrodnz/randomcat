import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule} from 'angular-bootstrap-md';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { ImgCardComponent } from './img-card/img-card.component';
import { RecipeComponent } from './recipe/recipe.component';


@NgModule({
  declarations: [
    AppComponent,
    ImgCardComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
    ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
