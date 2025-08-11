import {Component, input} from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project {
  readonly projectName = input.required<string>();
  readonly projectDescription = input.required<string>();
  readonly githubLink = input<string>();
  readonly websiteLink = input<string>();
}
