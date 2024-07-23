import { Component, OnInit, Input } from '@angular/core';
import { CatApiService } from '../../services/cat-api/cat-api.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() cellsToShow: number = 1;
  @Input() cellsToScroll: number = 1;
  @Input() arrows: boolean = true;
  breeds: any[] = [];
  errorMessage: string = '';

  constructor(
    private catApiService: CatApiService) { }

    ngOnInit(): void {
      this.catApiService.getList().pipe(
        catchError(error => {
          this.errorMessage = 'Erro ao carregar a lista de raças de gatos';
          console.error('Erro na chamada getList:', error);
          return of([]); 
        })
      ).subscribe((response: any) => {
        this.breeds = response;
        let filteredBreeds: any[] = [];
  
        this.breeds.forEach(breed => {
          this.catApiService.getCatDetails(breed.reference_image_id).pipe(
            catchError(error => {
              console.error('Erro na chamada getCatDetails:', error);
              return of({ url: '' });  
            })
          ).subscribe((imageResponse: any) => {
            breed.imageUrl = imageResponse.url;
            if (!!breed.imageUrl) {
              filteredBreeds.push(breed);
            }
          });
        });
        
        setTimeout(() => {
          this.breeds = filteredBreeds;
        }, 0);
      });
    }
}