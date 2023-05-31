import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {
  developer: Developer = new Developer(
  'Smith',
  'John',
  25,
  'non-binaire',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
  [
  {name: 'HTML', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png', site: 'https://fr.wikipedia.org/wiki/Hypertext_Markup_Language'},
{ name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png', site: 'https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade'},

  
  ]
);
}

