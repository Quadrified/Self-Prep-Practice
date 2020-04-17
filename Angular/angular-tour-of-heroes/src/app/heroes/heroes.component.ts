import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes = HEROES; // Heros from mock-heroes
  /*
      hero: Hero = {
      id: 1,
      name: 'Quadrified',
    };
  */

  selectedHero: Hero; // declaring selectedHero of type :Hero for id, name

  constructor() {}

  ngOnInit() {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    // console.log(hero);
  }
}
