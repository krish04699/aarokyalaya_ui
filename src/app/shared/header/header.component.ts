import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'], // Fix the typo in styleUrl to styleUrls
})
export class HeaderComponent {
  currentMenu: string = 'home'; // Default menu on load

  constructor(private router: Router) {}

  // Method to set the active menu and scroll to section


  setActive(menu: string): void {
    this.currentMenu = menu;

    const element = document.getElementById(`${menu}-link`);
    
    // if (element) {
    //   // Scroll to the element, trigger route change, or update UI
    //   element.scrollIntoView({ behavior: 'smooth' });
    // Navigate to the specified route and scroll to the section
    this.router.navigate([menu]).then(() => {
      const element = document.getElementById(menu);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
