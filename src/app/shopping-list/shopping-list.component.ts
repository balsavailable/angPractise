import { Component, OnDestroy, OnInit } from '@angular/core';
import {Ingredient}  from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
 
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

 public ingredients?:Ingredient[];
 
 constructor(private shoppingListService:ShoppingListService)
 {
   
 }
 ngOnInit(): void {
   this.ingredients=this.shoppingListService.getIngredients();
 } 
}
