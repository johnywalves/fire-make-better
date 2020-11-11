import { Component, OnInit } from '@angular/core';
import { ResultRecipeDetail } from '../recipe';

import { RECIPE } from '../mock-recipes';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  recipe: ResultRecipeDetail = RECIPE;

  constructor() {}

  ngOnInit(): void {}
}
