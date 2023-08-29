import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  addIngredientToShoppingList(ingredients: Ingredient[] | undefined) {
   
      this.slService.addIngredients(ingredients);          
  
  }

  public recipeEvent=new EventEmitter<Recipe>();

  recipes:Recipe[]=[new Recipe("A Veg receipe","veg food","https://post.healthline.com/wp-content/uploads/2020/09/vegetarian-diet-plan-732x549-thumbnail.jpg"),new Recipe("salad receipe","fruits","https://hips.hearstapps.com/hmg-prod/images/pasta-salad-horizontal-jpg-1522265695.jpg?crop=0.6668xw:1xh;center,top&resize=1200:*" ,[new Ingredient('Pepper',100),new Ingredient("onion",22)])];

  constructor(private slService: ShoppingListService) {    
  }

  getRecipes()
  {
    return this.recipes.slice();
  }

  getRecipeByIndex(index:number)
  {
    return this.recipes.slice()[index];
  }

}
