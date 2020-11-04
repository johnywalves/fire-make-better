import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularTiltModule } from 'angular-tilt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';

@NgModule({
  declarations: [AppComponent, RecipeCardComponent, ListRecipesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, AngularTiltModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
