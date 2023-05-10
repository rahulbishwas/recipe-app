import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
 ngOnInit(): void {
console.log(this.recipe)
 }
 constructor(private recipeService:RecipesService){}

 @Input() recipe:Recipe;
 onAddToShoppingList(){
this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
 }
}
