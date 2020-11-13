import { Component, OnInit } from '@angular/core';
import { ResultRecipeDetail } from '../recipe';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  recipe: ResultRecipeDetail;

  getRecipe = (id: string) => {
    this.http
      .get<ResultRecipeDetail>(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=eefc0e51bd1e436487d83b260fe4fe86`
      )
      .subscribe((data) => (this.recipe = data));
  };

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getRecipe(this.route.snapshot.paramMap.get('recipeId'));
  }
}
