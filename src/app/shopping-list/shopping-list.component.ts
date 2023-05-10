import { ShoppingListService } from './shopping-list.service';
import { Component, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  ingredients:Ingredient[];
constructor(private slService:ShoppingListService){}

ngOnInit(){
  this.ingredients=this.slService.getIngredients();
  this.slService.ingredientChanged.subscribe((ingredients:Ingredient[])=>{
    this.ingredients=ingredients
  })
}


}
