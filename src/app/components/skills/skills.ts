import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SKILLS } from '../../models/Data/skills';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills = SKILLS;
    categories = ['Language', 'Backend', 'Frontend', 'Database', 'Cloud', 'Tools'];

  getSkills(category: string): Skill[] {
    return this.skills.filter(x => x.category === category);
  }
}
