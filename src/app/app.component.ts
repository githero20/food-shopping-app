import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'food-shopping-app';
  loadedFeature = 'recipe';

  // receives the event (as a string) from onNavigate and updates the loadedFeature with it
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
