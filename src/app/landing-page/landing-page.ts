import { Component } from '@angular/core';
import {Project} from '../project/project';
import {AboutMe} from '../about-me/about-me';

@Component({
  selector: 'app-landing-page',
  imports: [
    Project,
    AboutMe
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {

}
