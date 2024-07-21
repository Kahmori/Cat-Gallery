import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatApiService {
  private apiUrl = 'https://api.thecatapi.com/v1/breeds';
  private detailedUrl = `https://api.thecatapi.com/v1/images/`;

  constructor(
    private http: HttpClient,
  ) { }

  getList() : Observable<any>{
    return this.http.get(this.apiUrl);
  }

  getCatDetails(imageId: string) : Observable<any>{
    const imageUrl = `${this.detailedUrl}${imageId}`;
    return this.http.get(imageUrl);
  }
}
