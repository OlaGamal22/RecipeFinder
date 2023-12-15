import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { RecipeModel } from '../Models/recipe_model';

@Injectable({
  providedIn: 'root'
})
export class RecipeApiService {

  private readonly apiUrl = 'https://api.spoonacular.com';
  private readonly apiKey = '80539bfb7c4f42a4a6157b41e400c34d'; 
  onMakeSearch = new Subject<string>();
  onClearSearch = new Subject();
  searchKeyword:string = '';
  skip:number = 0;

  public currentRecipes:RecipeModel[]=[];
  constructor(private http: HttpClient) { }

  getRandomRecipes(): Observable<any> {
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);
    let url = '';
    if(this.searchKeyword == ''){
       url = `${this.apiUrl}/recipes/random?number=20`
    }
    else{
       url = `${this.apiUrl}/recipes/complexSearch?query=${this.searchKeyword}&number=20&offset=${this.skip}`;
    }
    return this.http.get<any>(url, { headers });
  }

  getRecipeById(id: number): Observable<any> {
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);
    const url = `${this.apiUrl}/recipes/${id}/information`;
    return this.http.get<RecipeModel>(url, {headers}); 
  }

  filterRecipes( skip:number = 0, searchKeyword:string): Observable<any>{
    this.searchKeyword = searchKeyword;
    this.skip = 0;
    this.onClearSearch.next();
    
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);
    const url = `${this.apiUrl}/recipes/complexSearch?query=${searchKeyword}&number=30&offset=${skip}`;
    return this.http.get<any>(url, {headers})
  }
}
