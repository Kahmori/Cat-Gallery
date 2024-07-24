import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    compiled = fixture.nativeElement;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });
  
  it('should set scrolled to false when window is not scrolled', () => {
    window.scrollY = 0;
    app.onScroll();
    expect(app.scrolled).toBeFalse();
  });
  
  it('should log an error message when handleError is called', () => {
    spyOn(console, 'error');
    const error = new Error('Test error');
    app.handleError(error);
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith('An error occurred:', error.message);
  });
  
  it('should display an alert when handleError is called', () => {
    spyOn(window, 'alert');
    const error = new Error('Test error');
    app.handleError(error);
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith(`An error occurred: ${error.message}`);
  });

  it(`should have as title 'KatzenFinder'`, () => {
    expect(app.title).toEqual('KatzenFinder');
  });

  it('should render title in the initial banner', () => {
    fixture.detectChanges();
    const title = compiled.querySelector('#initial-banner-heading')?.textContent;
    expect(title).toContain('KatzenFinder');
  });

  it('should render subtitle in the initial banner', () => {
    fixture.detectChanges();
    const subtitle = compiled.querySelector('#subtitle')?.textContent;
    expect(subtitle).toContain('A cat gallery, to help you to find your ideal pet!');
  });

  it('should have a button with text GET STARTED', () => {
    fixture.detectChanges();
    const button = compiled.querySelector('button')?.textContent;
    expect(button).toBe('GET STARTED');
  });

  it('should call onScroll method when window is scrolled', () => {
    spyOn(app, 'onScroll');
    window.dispatchEvent(new Event('scroll'));
    expect(app.onScroll).toHaveBeenCalled();
  });

  it('should have a header with links to INFO, GALLERY and ABOUT US', () => {
    fixture.detectChanges();
    const links = compiled.querySelectorAll('header ul li a');
    const hrefs = Array.from(links).map(link => link.getAttribute('href'));

    expect(hrefs).toContain('#intro');
    expect(hrefs).toContain('#cards-container');
    expect(hrefs).toContain('#about-us');
  });

  it('should render three grid items in the intro section', () => {
    fixture.detectChanges();
    const gridItems = compiled.querySelectorAll('#intro .grid .grid-item');
    expect(gridItems.length).toBe(3);
  });

  it('should render the carousel component in the cards-container section', () => {
    fixture.detectChanges();
    const carouselContainer = compiled.querySelector('#cards-container app-carousel');
    expect(carouselContainer).toBeTruthy();
  });

  it('should render the footer with social media links', () => {
    fixture.detectChanges();
    const socialMediaLinks = compiled.querySelectorAll('footer ul.wrapper a');
    expect(socialMediaLinks.length).toBe(3);
  });

  it('should render the footer copyright text', () => {
    fixture.detectChanges();
    const footerText = compiled.querySelector('footer div p')?.textContent;
    expect(footerText).toContain('Copyright © 2024. All rights reserved.');
  });
});