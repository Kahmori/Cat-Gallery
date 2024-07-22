import { Component, OnInit } from '@angular/core';
import { CatApiService } from '../../services/cat-api/cat-api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  breeds: any[] = [];

  constructor(private catApiService: CatApiService) { }

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