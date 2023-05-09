import { RecipesService } from './../recipes.service';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
@Output() recipewasSelected=new EventEmitter<Recipe>();
recipes:Recipe[];
constructor(private recipeService:RecipesService){}
ngOnInit(){
  this.recipes=this.recipeService.getRecipes();
}


  onRecipeSelected(recipe:Recipe){
 this.recipewasSelected.emit(recipe)
  }

}
