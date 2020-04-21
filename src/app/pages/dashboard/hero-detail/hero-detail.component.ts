import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../../interfaces/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @Output() save = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() resethero = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toSave() {
    this.save.emit();
  }

  toDelete() {
    this.delete.emit();
  }

  toResetHero() {
    this.resethero.emit();
  }

}
