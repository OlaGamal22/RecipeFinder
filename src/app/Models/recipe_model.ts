export interface RecipeModel {
    id: number;
    title: string;
    summary: string;
    instructions: string;
    image: string;
    extendedIngredients: Ingredients[]; 
  }

interface Ingredients{
    id:number;
    original:string;
}
