import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipeName: string;
  @Input() recipeDescription: string;
  @Input() recipePath: string;
  @Input() index: number;
  @Input() lastIndex: number;

  setItemBorder(index: number) {
    if (index === 0) {
      return 'rounded-top'
    }
    if (index === this.lastIndex) {
      return 'rounded-bottom'
    }
    return 'rounded-0'
  }
}
