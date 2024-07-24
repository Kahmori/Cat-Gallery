import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display the correct image URL', () => {
    component.imageUrl = 'https://example.com/image.jpg';
    fixture.detectChanges();
    const imgElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(imgElement.src).toContain(component.imageUrl);
  });

  it('should display the correct name', () => {
    const testName = 'Test Cat';
    component.name = testName;
    fixture.detectChanges();
    const nameElement = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(nameElement.textContent).toBe(testName);
  });

  it('should display the correct description', () => {
    const testDescription = 'A description of the test cat.';
    component.description = testDescription;
    fixture.detectChanges();
    const descriptionElement = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(descriptionElement.textContent).toBe(testDescription);
  });

  it('should have a link with the correct URL', () => {
    const testUrl = 'https://example.com';
    component.wikipediaUrl = testUrl;
    fixture.detectChanges();
    const linkElement = fixture.debugElement.query(By.css('a')).nativeElement;
    expect(linkElement.href).toContain(testUrl);
  });

  it('should have a link with the correct aria-label', () => {
    const testName = 'Test Cat';
    component.name = testName;
    fixture.detectChanges();
    const linkElement = fixture.debugElement.query(By.css('a')).nativeElement;
    expect(linkElement.getAttribute('aria-label')).toBe(`Learn more about ${testName}`);
  });
});