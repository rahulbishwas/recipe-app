import { RecipesService } from './../recipes.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{

recipes:Recipe[];
constructor(private recipeService:RecipesService){}
ngOnInit(){
  this.recipes=this.recipeService.getRecipes();
}



}
