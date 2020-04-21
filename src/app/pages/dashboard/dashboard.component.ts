import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  title = 'Heros';
  selectedHero: Hero;
  heros: Hero[] = [];

  constructor(private heroService: HeroService) { }
  getHeroes(): void {
    this.heroService.getHeros()
        .subscribe(heroes => this.heros = heroes);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  save(): void {
    this.heroService.updateHero(this.selectedHero)
      .subscribe(() => this.getHeroes());
  }
  delete(): void {
    this.heroService.deleteHero(this.selectedHero)
      .subscribe(() => this.getHeroes());
  }
  OnReset(): void {
    this.heroService.resetHeros();
    // this.heroService.getHeros();
  }
  ngOnInit() {
    this.getHeroes();
  }

}
