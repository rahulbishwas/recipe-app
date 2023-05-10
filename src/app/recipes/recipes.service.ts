import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
recipeSelected=new EventEmitter<Recipe>();
  constructor(private slService:ShoppingListService) { }

  private recipes:Recipe[]=[
    new Recipe(
      'A Test Sandwitch',
      'This is simply a test',
      'https://images.pexels.com/photos/3771106/pexels-photo-3771106.jpeg?auto=compress&cs=tinysrgb&w=600',
      [
        new Ingredient('Meat',1),
        new Ingredient('Bread',4)
      ]
      ),
    new Recipe(
      'Big fat Burger',
      'what else you need to say.',
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      [
        new Ingredient('Buns',2),
        new Ingredient('Meat',1)

      ])
  ];

getRecipes(){
  return this.recipes.slice();
}

addIngredientsToShoppingList(ingredients:Ingredient[]){

}

}
