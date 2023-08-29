import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {

 recipe?:Recipe;
 id:number | undefined;

 constructor(private recipeService:RecipeService,private route:ActivatedRoute,private router:Router)
 {

 }

 ngOnInit()
 {
  this.route.params.subscribe((param)=>{
     this.recipe=this.recipeService.getRecipeByIndex(+param["id"]);
     this.id=+param["id"];
  });
 }

 onAddToShoppingList(){
  this.recipeService.addIngredientToShoppingList(this.recipe?.ingredients);
 }

 onEditRecipe(){
  this.router.navigate(['edit'],{relativeTo:this.route});
 }

}
