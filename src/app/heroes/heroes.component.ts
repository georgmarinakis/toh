
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // import hero.ts
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes', // CSS element selector
  templateUrl: './heroes.component.html', // location of template file
  styleUrls: ['./heroes.component.css'] // location of the CSS styles
})
export class HeroesComponent implements OnInit {

  heroes:Hero[]; 
  
  // Dependency Injection of service and message
  constructor(private heroService: HeroService, private messageService: MessageService)
  { } 

  // Create a get method, based on service and send a message after fetching
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes); //declarative => Arrow Function
  } // The subscribe() method passes the emitted array to the callback, which sets the component's heroes property.

  onSelect(hero:Hero): void { 

    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  ngOnInit(): void {
    this.getHeroes(); // call of the service
  }
}

// Always export the component class so you can import it elsewhere