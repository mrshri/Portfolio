import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Hero} from '../hero/hero';
import { Skills } from '../skills/skills';
import { About } from '../about/about';
import { Projects } from '../projects/projects';
import { Experience } from '../experience/experience';
import { Certifications } from '../certifications/certifications';
import { Contact } from '../contact/contact';
import { Footer } from '../footer/footer';
import { ScrollTop } from '../scroll-top/scroll-top';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [
    Navbar,
    Hero,
    Skills,
    About,
    Projects,
    Experience,
    Contact,
    Certifications,
    Footer,
    ScrollTop
],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
