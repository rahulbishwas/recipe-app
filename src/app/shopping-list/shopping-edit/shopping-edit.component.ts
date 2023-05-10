import { ShoppingListService } from './../shopping-list.service';
import { Component, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
@ViewChild('nameInput')nameInputRef:ElementRef;
@ViewChild('amountInput')amountInputRef:ElementRef;

constructor(private slService:ShoppingListService){}
  // @ViewChild()nameInput;
  onAddItem(){
const  ingName=this.nameInputRef.nativeElement.value;
const  ingAmount=this.amountInputRef.nativeElement.value;
const newIngredient=new Ingredient(ingName,ingAmount);

this.slService.addIngredient(newIngredient)


  }

}
