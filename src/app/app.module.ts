import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from '../components/card/card.component';
import { CatApiService } from 'src/services/cat-api/cat-api.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
  ],
  providers: [CatApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
