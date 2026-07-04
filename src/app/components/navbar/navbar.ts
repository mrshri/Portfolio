import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Theme } from '../../services/theme';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
   menuOpen = false;

  constructor(public theme: Theme) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleTheme() {
    this.theme.toggleTheme();
  }
}
