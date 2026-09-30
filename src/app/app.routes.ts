// my-angular-app/src/app/app.routes.ts
// This files contains the routes for the application. 
// Each route maps a URL path to a component that will be displayed 
// when that path is accessed.

import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Bio } from './bio/bio';
import { Experience } from './experience/experience';
import { Certifications } from './certifications/certifications';
import { Projects } from './projects/projects';
import { Skills } from './skills/skills';
import { OtherInfo } from './other-info/other-info';

export const routes: Routes = [
  { path: 'Home', component: Home },
  { path: 'bio', component: Bio },
  { path: 'Experience', component: Experience },
  { path: 'Certifications', component: Certifications },
  { path: 'Projects', component: Projects },
  { path: 'Skills', component: Skills },
  { path: 'OtherInfo', component: OtherInfo }
];
