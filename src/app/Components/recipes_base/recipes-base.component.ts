import { Component, OnInit } from '@angular/core';
import { RecipeModel } from 'src/app/Models/recipe_model';
@Component({
  selector: 'recipes-base',
  template: '',
})
export class RecipesBaseComponent implements OnInit {

  favorites: RecipeModel[] = [];

  constructor() { }

  ngOnInit() {
  }

  toggleFavorite(recipe: any): void {
    const index = this.favorites.findIndex((fav: any) => fav.id === recipe.id);
    if (index === -1) {
      this.favorites.push(recipe);
    } else {
      this.favorites.splice(index, 1);
    }
    localStorage.setItem('favoriteRecipes', JSON.stringify(this.favorites));
  }
  
  public getFavoritesFromLocalStorage(){
    const savedFavorites = localStorage.getItem('favoriteRecipes');
    if (savedFavorites) {
      this.favorites = JSON.parse(savedFavorites);
    }
  }

  isInFavorites(recipe: any): boolean {
    return this.favorites.some(fav => fav.id === recipe.id);
  }

}
