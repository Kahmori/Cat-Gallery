import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';

import {IvyCarouselModule} from 'angular-responsive-carousel';

import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CatApiService } from 'src/app/services/cat-api/cat-api.service';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CardComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    IvyCarouselModule
  ],
  providers: [CatApiService],
  bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap{
  constructor(private injector: Injector){}

  ngDoBootstrap(appRef: ApplicationRef): void {
    const cardElement = createCustomElement(CardComponent, {injector: this.injector});
    customElements.define('card-element', cardElement);
  }
 }
