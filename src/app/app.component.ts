import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-cat-gallery';
  scrolled = false;

  onScroll() {
    const scrollPosition = window.scrollY;
    const threshold = 0;

    if (scrollPosition > threshold) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }
}
