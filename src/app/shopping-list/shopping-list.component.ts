import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Tomato', 1),
    new Ingredient('Pepper', 3),
  ];

  // will receive an ingredient event from the emitter
  onIngredientAdded(ingredient: Ingredient) {
    ingredient.name !== '' && this.ingredients.push(ingredient);
  }
}
