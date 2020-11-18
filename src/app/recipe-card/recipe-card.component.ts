import { Component, OnInit, Inject, Input } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: Recipe;
  base_href: string;

  constructor(@Inject(APP_BASE_HREF) private baseHref: string) {
    this.base_href = this.baseHref;
  }

  ngOnInit(): void {}
}
