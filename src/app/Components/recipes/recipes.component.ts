import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { RecipeModel } from 'src/app/Models/recipe_model';
import { RecipeApiService } from 'src/app/Services/recipe-api.service';
import { filter } from 'rxjs/operators';
import { RecipesBaseComponent } from '../recipes_base/recipes-base.component';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent extends RecipesBaseComponent implements OnInit {

  randomRecipes: RecipeModel[] = []; 
  displayFavorites: boolean = false;

  constructor(private recipeApiService: RecipeApiService, private route: ActivatedRoute, private router: Router) { 
    super()
  }

  ngOnInit(): void {
    //on filter
    this.recipeApiService.onMakeSearch.subscribe(
      data => {
        if(!this.displayFavorites)
          this.searchRandomRecipes(data);
        else
          this.filterFavorites(data);
      }
    )

    //on clear search textbox
    this.recipeApiService.onClearSearch.subscribe(
      _ => this.randomRecipes = []
    )

    this.displayFavorites = this.route.snapshot.url[0]?.path === 'favorites';

    this.fetchRecipes();
    this.getFavoritesFromLocalStorage();
    
  }

  searchRandomRecipes(keyword: string): void {
    this.recipeApiService.filterRecipes(0, keyword).subscribe(
      (res: any) => {
        this.randomRecipes = res.results;
      }
    );
  }
  
  filterFavorites(keyword: string): void {
    this.getFavoritesFromLocalStorage();
    this.favorites = this.favorites.filter(fav => fav.title.toLowerCase().includes(keyword.toLowerCase()));
  }

  fetchRecipes(): void {
    this.recipeApiService.getRandomRecipes().subscribe(
      (data) => {
        debugger
        if(data.recipes)
          this.randomRecipes = [...this.randomRecipes, ...data.recipes]; 
        else if(data.results)
          this.randomRecipes = [...this.randomRecipes, ...data.results]; 
      },
      (error) => {
        console.error('Error fetching random recipes:', error);
      }
    );
  }

  goToRecipeDetails(id: number): void {
    this.router.navigate(['/recipe-details', id]);
  }

  loadMoreData(){
    this.fetchRecipes();
  }

}
