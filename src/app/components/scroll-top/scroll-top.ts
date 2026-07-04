import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  imports: [],
  templateUrl: './scroll-top.html',
  styleUrl: './scroll-top.css',
})
export class ScrollTop {
  visible = false;

  @HostListener('window:scroll')
  scroll() {
    this.visible = window.scrollY > 300;
  }

  top() {
    window.scrollTo({
      top: 0,

      behavior: 'smooth',
    });
  }
}
