import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeModel } from 'src/app/Models/recipe_model';
import { RecipeApiService } from 'src/app/Services/recipe-api.service';
import { RecipesBaseComponent } from '../recipes_base/recipes-base.component';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent extends RecipesBaseComponent implements OnInit {

  recipeDetails!: RecipeModel; 
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeApiService 
  ) { 
    super()
  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.getRecipeDetails(+id); 
      } else {
        console.error("'id' parameter is missing.");
      }
    });
    this.getFavoritesFromLocalStorage();
  }
  
  getRecipeDetails(id: number): void {
    this.recipeService.getRecipeById(id).subscribe(
      data => {
        this.recipeDetails = data
      },
      err => alert('Error getting recipe details')
    );
  }

  goToRecipesPage(): void {
    this.router.navigate(['/recipes']);
  }

}
