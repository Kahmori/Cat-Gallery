import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CatApiService } from './cat-api.service';
import { BreedModel, DetailBreedModel } from 'src/app/models/BreedModel';

describe('CatApiService', () => {
  let service: CatApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CatApiService]
    });

    service = TestBed.inject(CatApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve a list of cat breeds from the API via GET', () => {
    const dummyBreeds: BreedModel[] = [
      {
        weight: { imperial: '7 - 10', metric: '3 - 5' },
        id: 'abys',
        name: 'Abyssinian',
        cfa_url: 'http://cfa.org/Breeds/BreedsAB/Abyssinian.aspx',
        vetstreet_url: 'http://www.vetstreet.com/cats/abyssinian',
        vcahospitals_url: 'https://vcahospitals.com/know-your-pet/cat-breeds/abyssinian',
        temperament: 'Active, Energetic, Independent, Intelligent, Gentle',
        origin: 'Egypt',
        country_codes: 'EG',
        country_code: 'EG',
        description: 'The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.',
        life_span: '14 - 15',
        indoor: 0,
        lap: 1,
        alt_names: '',
        adaptability: 5,
        affection_level: 5,
        child_friendly: 3,
        dog_friendly: 4,
        energy_level: 5,
        grooming: 1,
        health_issues: 2,
        intelligence: 5,
        shedding_level: 2,
        social_needs: 5,
        stranger_friendly: 5,
        vocalisation: 1,
        experimental: 0,
        hairless: 0,
        natural: 1,
        rare: 0,
        rex: 0,
        suppressed_tail: 0,
        short_legs: 0,
        wikipedia_url: 'https://en.wikipedia.org/wiki/Abyssinian_(cat)',
        hypoallergenic: 0,
        reference_image_id: '0XYvRd7oD'
      },
    ];

    service.getList().subscribe(breeds => {
      expect(breeds.length).toBe(1);
      expect(breeds).toEqual(dummyBreeds);
    });

    const request = httpMock.expectOne(service['apiUrl']);
    expect(request.request.method).toBe('GET');
    request.flush(dummyBreeds);
  });

  it('should retrieve cat details from the API via GET', () => {
    const dummyDetails: DetailBreedModel = {
      id: '1XtZMSeBA',
      url: 'https://example.com/image.jpg',
      breeds: [], 
      width: 0,
      height: 0,
    };
    const imageId = '1XtZMSeBA';

    service.getCatDetails(imageId).subscribe(details => {
      expect(details).toEqual(dummyDetails);
    });

    const request = httpMock.expectOne(`${service['detailedUrl']}${imageId}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyDetails);
  });
});
