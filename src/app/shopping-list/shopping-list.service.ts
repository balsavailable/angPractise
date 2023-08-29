import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  public ingredients:Ingredient[]=[new Ingredient('apple',44),new Ingredient('orange',22)];
  
  public ingredientEvent=new EventEmitter<Ingredient>();
  
  constructor() { }

  getIngredients()
  {
    return this.ingredients;
  }

  addIngredient(ingredient:Ingredient)
  {
     this.ingredients.push(ingredient);
  }
  addIngredients(ingredient?:Ingredient[])
  {
    if(ingredient!==undefined)
    {
      this.ingredients.push(...ingredient);
    }
  }

}
