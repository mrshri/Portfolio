import { Component, OnInit } from '@angular/core';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
  '.NET Full Stack Developer',
  'Angular Developer',
  'ASP.NET Core Developer',
  'Azure Cloud Enthusiast'
];

current = '';

private titleIndex = 0;
private charIndex = 0;

ngOnInit() {
  this.startTyping();
}

startTyping() {
  const text = this.titles[this.titleIndex];

  this.current = '';
  this.charIndex = 0;

  const typing = setInterval(() => {

    this.current += text.charAt(this.charIndex);
    this.charIndex++;

    if (this.charIndex >= text.length) {

      clearInterval(typing);

      setTimeout(() => {

        this.titleIndex =
          (this.titleIndex + 1) % this.titles.length;

        this.startTyping();

      }, 1800);

    }

  }, 90);
}
  copied=false;

copyEmail(){

navigator.clipboard.writeText(
'shrinivas71995@gmail.com'
);

this.copied=true;

setTimeout(()=>{

this.copied=false;

},2000);

}
}