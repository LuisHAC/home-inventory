import { Component } from '@angular/core';
import { RecipeContainer } from './components/recipeContainer/recipeContainer.component';
import { KitchenService } from './services/jsonHandler.service';
import { Recipe } from './domain/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public recipes: Recipe[] = [];
  //variables
  constructor(private kitchenService: KitchenService) {

  }
  title = 'home-inventory';

  ngOnInit() {
    this.kitchenService.getRecipes().subscribe(result => {
      this.recipes = result;
      console.log(this.recipes);
    });
  }

  displayDetails() {
    
  }
}
