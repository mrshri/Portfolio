import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SKILLS } from '../../models/Data/skills';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills = SKILLS;;
}
