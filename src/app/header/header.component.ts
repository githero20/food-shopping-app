import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [],
})
export class HeaderComponent {
  collapsed = true;

  // emits that string value as an event
  @Output() featureSelected = new EventEmitter<string>();

  // a method that accepts a string value
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
