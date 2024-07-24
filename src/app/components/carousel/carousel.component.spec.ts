import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CarouselComponent } from './carousel.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CatApiService } from 'src/app/services/cat-api/cat-api.service';

const apiBreeds = [
  {
    weight: { imperial: "7 - 10", metric: "3 - 5" },
    id: "abys",
    name: "Abyssinian",
    cfa_url: "http://cfa.org/Breeds/BreedsAB/Abyssinian.aspx",
    vetstreet_url: "http://www.vetstreet.com/cats/abyssinian",
    vcahospitals_url: "https://vcahospitals.com/know-your-pet/cat-breeds/abyssinian",
    temperament: "Active, Energetic, Independent, Intelligent, Gentle",
    origin: "Egypt",
    country_codes: "EG",
    country_code: "EG",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    life_span: "14 - 15",
    indoor: 0,
    lap: 1,
    alt_names: "",
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
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    hypoallergenic: 0,
    reference_image_id: "0XYvRd7oD"
  }
];

const mockBreeds = apiBreeds.map(breed => ({
  imageUrl: `https://api.thecatapi.com/v1/images/${breed.reference_image_id}`,
  name: breed.name,
  description: breed.description,
  wikipedia_url: breed.wikipedia_url
}));

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselComponent ],
      providers: [ CatApiService ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    component.breeds = mockBreeds;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct breed information', () => {
    const cards = fixture.debugElement.queryAll(By.css('.card'));

    cards.forEach((card, index) => {
      const breed = mockBreeds[index];
      const img = card.query(By.css('img')).nativeElement;
      const h2 = card.query(By.css('h2')).nativeElement;
      const p = card.query(By.css('p')).nativeElement;
      const a = card.query(By.css('a')).nativeElement;

      expect(img.src).toContain(breed.imageUrl);
      expect(h2.textContent.replace(/\u00A0/g, ' ').trim()).toBe(breed.name);
      expect(p.textContent.replace(/\u00A0/g, ' ').trim()).toBe(breed.description);
      expect(a.href).toBe(breed.wikipedia_url);
    });
  });

  it('should set carousel properties correctly', () => {
    expect(component.cellsToShow).toBe(1);
    expect(component.cellsToScroll).toBe(1);
    expect(component.arrows).toBeTrue();
  });

  it('should render alternative text for images', () => {
    const cards = fixture.debugElement.queryAll(By.css('.card img'));
    cards.forEach((card, index) => {
      const breed = mockBreeds[index];
      expect(card.nativeElement.alt).toBe('Cat Image');
    });
  });

  it('should handle empty breeds list correctly', () => {
    component.breeds = [];
    fixture.detectChanges();
    const cards = fixture.debugElement.queryAll(By.css('.card'));
    expect(cards.length).toBe(0);
  });
});