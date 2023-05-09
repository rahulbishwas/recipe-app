import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() { }

  private recipes:Recipe[]=[
    new Recipe('A Test Recipe','This is simply a test','https://images.pexels.com/photos/3771106/pexels-photo-3771106.jpeg?auto=compress&cs=tinysrgb&w=600')
  ];

getRecipes(){
  return this.recipes.slice();
}


}
