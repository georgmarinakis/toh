import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  //get method
  getHeroes(): Observable<Hero[]> { //Input: a Hero object, return: an Observable<Hero[]>
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}

//Observable: synch or asynch
//Services: share info among classes

// This is a typical "service-in-service" scenario:
// you inject the MessageService into the HeroService which is injected into the HeroesComponent.