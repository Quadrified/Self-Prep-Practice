import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  // heroes = HEROES; // Heros from mock-heroes

  heroes: Hero[]; // Coming from HeroService and replacing local mock data

  selectedHero: Hero; // declaring selectedHero of type :Hero for id, name

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(
  //     `HeroService: Selected hero Id = ${hero.id} => ${hero.name}`
  //   );
  // }

  getHeroes(): void {
    // Subscribe() gets all the heros from the Observable in the hero.service file and
    // returns it back to the component whhere it is injected i.e.hero.component
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
