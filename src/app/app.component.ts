// AppComponent Component Class
// Imports
import { Component } from '@angular/core';

// Component Decorators - to specify properties for the structure of your components
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// Export Class Component - where all the logic resides
export class AppComponent {
  title = 'app';
}
