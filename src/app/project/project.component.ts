import { Component } from '@angular/core';
import { Project } from '../project.model'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projects: Project[] = [
     new Project("Oregon Wild", "A rebuild of the Arctic Wild site using Flexbox.",
         "https://vegemouse.github.io/oregon-wild/", "https://github.com/vegemouse/oregon-wild", "../../assets/img/orWild.jpg", ["CSS", "SASS"]),
     new Project("Oregon Wild", "A rebuild of the Arctic Wild site using Flexbox.",
         "https://vegemouse.github.io/oregon-wild/", "https://github.com/vegemouse/oregon-wild", "../../assets/img/orWild.jpg", ["CSS", "SASS"]),
     new Project("Oregon Wild", "A rebuild of the Arctic Wild site using Flexbox.",
         "https://vegemouse.github.io/oregon-wild/", "https://github.com/vegemouse/oregon-wild", "../../assets/img/orWild.jpg", ["CSS", "SASS"])
   ];
   color = "blue";
}
