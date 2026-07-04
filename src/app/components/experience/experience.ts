import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EXPERIENCES } from '../../models/Data/experience';

@Component({
  selector: 'app-experience',
    standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
    experience =EXPERIENCES;
}
