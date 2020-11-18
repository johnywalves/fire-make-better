import { Component, OnInit, Inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { ResultRecipeDetail } from '../recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  recipe: ResultRecipeDetail;
  base_href: string;

  getRecipe = (id: string) => {
    this.http
      .get<ResultRecipeDetail>(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=eefc0e51bd1e436487d83b260fe4fe86`
      )
      .subscribe((data) => (this.recipe = data));
  };

  constructor(@Inject(APP_BASE_HREF) private baseHref: string, private http: HttpClient, private route: ActivatedRoute) {
    this.base_href = this.baseHref;
  }

  ngOnInit(): void {
    this.getRecipe(this.route.snapshot.paramMap.get('recipeId'));
  }
}
