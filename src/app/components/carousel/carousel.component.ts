import { Component, OnInit, Input } from '@angular/core';
import { CatApiService } from '../../services/cat-api/cat-api.service';

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

  constructor(
    private catApiService: CatApiService) { }

  ngOnInit(): void {
    this.catApiService.getList().subscribe((response: any) => {
      this.breeds = response;
      let filteredBreeds: any[] = [];

      this.breeds.forEach(breed => {
        this.catApiService.getCatDetails(breed.reference_image_id).subscribe((imageResponse: any) => {
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