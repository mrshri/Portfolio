import { Component, OnInit } from '@angular/core';
import { SOCIAL } from '../../shared/social-links';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class Hero implements OnInit {

  social = SOCIAL;

  titles = [
  ".NET Core Full Stack Developer ",
  "ASP.NET Core Developer ",
  "Azure Cloud Enthusiast "
];

  current = '';

  copied = false;

  private titleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;

  ngOnInit(): void {
    this.typeEffect();
  }

  private typeEffect(): void {

    const fullText = this.titles[this.titleIndex];

    if (this.isDeleting) {
      this.current = fullText.substring(0, this.charIndex--);
    } else {
      this.current = fullText.substring(0, this.charIndex++);
    }

    let speed = this.isDeleting ? 35 : 70;

    // Finished typing
    if (!this.isDeleting && this.charIndex > fullText.length) {
      this.isDeleting = true;
       speed = 1000;
    }

    // Finished deleting
    if (this.isDeleting && this.charIndex < 0) {
      this.isDeleting = false;
      this.titleIndex = (this.titleIndex + 1) % this.titles.length;
      this.charIndex = 0;
       speed = 150; 
    }

    setTimeout(() => this.typeEffect(), speed);
  }

  copyEmail(): void {

    navigator.clipboard.writeText('shrinivas71995@gmail.com');

    this.copied = true;

    setTimeout(() => {
      this.copied = false;
    }, 1000);

  }

}