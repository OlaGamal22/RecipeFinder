import { Component } from '@angular/core';
import { RecipeApiService } from './Services/recipe-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipeFinderApp';
  searchKeyword: string = '';

  constructor(private recipService:RecipeApiService) { }

  searchRecipes(event: Event): void {
    event.preventDefault(); 
    this.recipService.onMakeSearch.next(this.searchKeyword);        
  }

}
