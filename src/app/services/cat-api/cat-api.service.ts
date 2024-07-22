import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { BreedModel, DetailBreedModel } from 'src/app/models/BreedModel';

@Injectable({
  providedIn: 'root'
})
export class CatApiService {
  private apiUrl = 'https://api.thecatapi.com/v1/breeds';
  private detailedUrl = `https://api.thecatapi.com/v1/images/`;

  constructor(
    private http: HttpClient,
  ) { }

  getList() : Observable<BreedModel[]>{
    return this.http.get<BreedModel[]>(this.apiUrl);
  }

  getCatDetails(imageId: string) : Observable<DetailBreedModel>{
    const imageUrl = `${this.detailedUrl}${imageId}`;
    return this.http.get<DetailBreedModel>(imageUrl);
  }
}