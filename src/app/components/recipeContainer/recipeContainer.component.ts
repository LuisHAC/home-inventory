//Imports
import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "src/app/domain/recipe";
import { ApiService } from "src/app/api.service";

@Component ({
    selector: 'recipe-container',
    templateUrl: 'recipeContainer.component.html',
    styleUrls: ['recipeContainer.component.scss']
})

export class RecipeContainer implements OnInit {
    
    constructor(apiService: ApiService) {
        
    }

    ngOnInit() {
        this.apiService.getMessage().subscribe(data => { 
            this.message = data; 
        }); 
    }
    
    @Input()
    recipe: Recipe;
    
    recipeClick() {
        
    }

}