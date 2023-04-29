import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
@Output() recipewasSelected=new EventEmitter<Recipe>();


  recipes:Recipe[]=[
    new Recipe('A Test Recipe','This is simply a test','https://images.pexels.com/photos/3771106/pexels-photo-3771106.jpeg?auto=compress&cs=tinysrgb&w=600')
  ];

  onRecipeSelected(recipe:Recipe){
 this.recipewasSelected.emit(recipe)
  }

}
