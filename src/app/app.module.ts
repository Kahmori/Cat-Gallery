import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {IvyCarouselModule} from 'angular-responsive-carousel';

import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CatApiService } from 'src/app/services/cat-api/cat-api.service';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    IvyCarouselModule
  ],
  providers: [CatApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
