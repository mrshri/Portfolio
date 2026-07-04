import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private title: Title,

    private meta: Meta,
  ) {
    title.setTitle('Shri Nivas | .NET Full Stack Developer');

    meta.updateTag({
      name: 'Shri Nivas | .NET Full Stack Developer',

      content:
        'Professional portfolio of Shri Nivas, .NET Full Stack Developer specializing in Angular, ASP.NET Core, Azure, SQL Server and enterprise applications.',
    });
  }
}
