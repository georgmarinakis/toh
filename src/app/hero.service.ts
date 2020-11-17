import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  //get method
  getHeroes(): Observable<Hero[]> { //Input: a Hero object, return: HEROES array
    this.messageService.add('HeroService: fetched heroes');
    return of (HEROES);
  }

  constructor(private messageService: MessageService) { }
}

//Observable: synch or asynch