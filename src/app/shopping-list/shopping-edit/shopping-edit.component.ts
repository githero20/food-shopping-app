import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', {
    static: false,
  })
  nameInputRef: ElementRef;
  @ViewChild('amountInput', {
    static: false,
  })
  amountInputRef: ElementRef;

  onAddItem() {}
}
