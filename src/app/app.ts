import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  links = [
    {path: 'Home', label: 'Home'},
    {path: 'bio', label: 'Bio'},
    {path: 'Experience', label: 'Experience'},
    {path: 'Certifications', label: 'Certifications'},
    {path: 'Projects', label: 'Projects'},
    {path: 'Skills', label: 'Skills'},
    {path: 'OtherInfo', label: 'Other Info'}
  ]
}
