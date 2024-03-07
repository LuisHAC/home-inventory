// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';



import { NgModule } from "@angular/core";
import { RecipeContainer } from "./recipeContainer/recipeContainer.component";

@NgModule({
  declarations: [RecipeContainer
  ],
  imports: [
  ],
  providers: [],
  bootstrap: [],
  exports: [RecipeContainer]
})
export class AppModule { }