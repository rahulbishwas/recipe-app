import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientChanged=new EventEmitter<Ingredient[]>()
 private ingredients:Ingredient[]=[
    new Ingredient('Apple',5),
    new Ingredient('Banana',10)
  ];
  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());

  }
  addIngredients(ingredients:Ingredient[]){

  }
}
