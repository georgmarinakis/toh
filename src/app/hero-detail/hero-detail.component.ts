import { Component, OnInit, Input } from '@angular/core'; // Input, from parent
import { Hero } from '../hero'; // import hero.ts


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero : Hero; // from parent, because the heroes.component.html (bottom line)
                        // will "give" it to the hero-detail.component.html (child)

  constructor() { }

  ngOnInit(): void {
  }
}
