import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CERTIFICATIONS } from '../../models/Data/certifications';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
})
export class Certifications {
    certifications = CERTIFICATIONS;
}
  