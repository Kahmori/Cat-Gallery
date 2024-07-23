import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KatzenFinder';
  scrolled = false;

  onScroll() {
    try {
      const scrollPosition = window.scrollY;
      const threshold = 0;

      if (scrollPosition > threshold) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error: any) {
    console.error('An error occurred:', error.message);
    alert('An error occurred: ' + error.message);
  }
}
