import { Recipe } from './../../recipes.model';
import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit{
  @Input()recipe:Recipe;
@Output() recipeSelected=new EventEmitter<void>();
  ngOnInit() {
  }
  onSelected(){
this.recipeSelected.emit();
  }


}
