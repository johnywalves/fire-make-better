import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultRecipe, Recipe } from '../recipe';

import { RECIPES } from '../mock-recipes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  recipes: Recipe[];
  search: string = '';
  loadingSearch: boolean = true;
  timeoutSearch: number;

  getRecipes = (textSearch: string) => {
    this.loadingSearch = false;
    this.http
      .get<ResultRecipe>(
        `https://api.spoonacular.com/recipes/complexSearch?query=${textSearch}&number=16&apiKey=eefc0e51bd1e436487d83b260fe4fe86`
      )
      .subscribe((data) => (this.recipes = data.results));
  };

  gotoTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  onClearSearch = () => {
    this.search = '';
    this.onChangeSearch('');
  };

  onKeyPressSearch = (event) => {
    if (event === 'Escape') {
      this.onClearSearch();
    }
  };

  onChangeSearch = (event) => {
    window.scrollTo({
      top:
        document.getElementById('list-result').offsetTop -
        document.querySelector('header').clientHeight,
      behavior: 'smooth',
    });

    if (event !== '') {
      this.loadingSearch = true;
      this.timeoutSearch && clearTimeout(this.timeoutSearch);

      this.timeoutSearch = window.setTimeout(() => {
        this.getRecipes(event);
      }, 500);
    }
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getRecipes('pie');
  }
}
