
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // import hero.ts

@Component({
  selector: 'app-heroes', // CSS element selector
  templateUrl: './heroes.component.html', // location of template file
  styleUrls: ['./heroes.component.css'] // location of the CSS styles
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit(): void {
  }

}

// Always export the component class so you can import it elsewhere