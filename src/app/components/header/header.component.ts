import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	@Output() chosenPage = new EventEmitter<string>();
	pageToRender = 'recipes'

	onRecipesClick() {
		this.pageToRender = 'recipes'
		this.chosenPage.emit('recipes')
	}

	onShoppingListClick() {
		this.pageToRender = 'shopping'
		this.chosenPage.emit('shopping')
	}
}
