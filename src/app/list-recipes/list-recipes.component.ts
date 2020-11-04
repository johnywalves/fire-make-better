import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

import { RECIPES } from '../mock-recipes';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {
  recipes: Recipe[] = RECIPES.results;

  constructor() { }

  ngOnInit(): void {
  }

}
