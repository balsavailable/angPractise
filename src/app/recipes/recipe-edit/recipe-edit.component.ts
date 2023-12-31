import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent {

  id:number | undefined;
  editMode=false;

  constructor(private route:ActivatedRoute){

  }

  ngOnInit(){
    this.route.params.subscribe((param:Params)=>{
      this.id=+param["id"];
      this.editMode=param["id"]!=null;
    });
  }

}
