import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent {

  // @Output('emitIngredient')   emitIngredient =new EventEmitter<Ingredient>()
  @ViewChild('nameInput')
  nameInput?: ElementRef;
  @ViewChild('amountInput')
  amountInput?: ElementRef;
  constructor(private shoppingListService:ShoppingListService)
  {
    
  }
  onAddIngredient(){
      this.shoppingListService.addIngredient(new Ingredient((this.nameInput as ElementRef).nativeElement.value,(this.amountInput as ElementRef).nativeElement.value));
  }
}
