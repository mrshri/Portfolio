import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Theme {
darkMode() {
throw new Error('Method not implemented.');
}
  isDark = signal(true);

  constructor() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
      this.isDark.set(false);
      document.body.classList.add('light-theme');
    }
  }

  toggleTheme() {

    this.isDark.update(value => !value);

    if (this.isDark()) {
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    }
  }
}
