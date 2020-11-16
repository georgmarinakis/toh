
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // import hero.ts
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes', // CSS element selector
  templateUrl: './heroes.component.html', // location of template file
  styleUrls: ['./heroes.component.css'] // location of the CSS styles
})
export class HeroesComponent implements OnInit {

  heroes = HEROES; // from HEROES array on mock_heroes
  
  selectedHero: Hero; // from Hero interface
  
  onSelect(hero:Hero): void {
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit(): void {
  }
}

// Always export the component class so you can import it elsewhere