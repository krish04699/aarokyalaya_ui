import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'clinic-app';
  currentComponent: string = 'home';  // Default component is 'home'

  // This method will change the currently active component
  setActiveComponent(component: string) {
    this.currentComponent = component;
  }
}
