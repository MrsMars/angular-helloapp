import { Component } from '@angular/core';
import { Item } from './model/item'; 

@Component({
	selector: 'purchase-app',
	templateUrl: './app.component.html'
})
export class AppComponent {
	text: string;
	price: number = 0;

	items: Item[] = [
		{ purchase: "Apple", done: false, price: 15.9 },
        { purchase: "Milk", done: false, price: 60 },
        { purchase: "Potatoes", done: true, price: 22.6 },
        { purchase: "Cheese", done: false, price:310 }
	];

	addItem(text: string, price: number): void {
		if (text == null || text.trim() == "" || price == null) {
			return;
		}
		this.items.push(new Item(text, price));
	}
}