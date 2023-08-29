import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[]=[];
  
  constructor(private recipeService:RecipeService,private activatedRoute:ActivatedRoute,private route:Router)
  {
    
  }
  ngOnInit() {
    this.recipes= this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.route.navigate(['new'],{relativeTo:this.activatedRoute});
  }

}
