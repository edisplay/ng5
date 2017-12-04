import { Component, OnInit } from '@angular/core';
// import 7 animations-specific functions
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
// import DataService 
import { DataService } from '../data.service';

// Component Decorator with properties
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // for a small amout of template code use template
  // template: `
  // <p>template html</p>
  // `,
  styleUrls: ['./home.component.scss'],
  // styles: [`
  //   p { font-weight: bold }
  //   div { color: gray; }
  // `],
  // animation properties - define animations
  animations: [

    trigger('goals', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35%)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1})
          ]))
        ]), {optional: true}),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35%)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1})
          ]))
        ]), {optional: true})

      ])
    ])

  ]
})
export class HomeComponent implements OnInit {

  // use interpolation to display properties defined here in the template

  // itemCount: number = 4;
  itemCount: number;

  btnText: string = 'Add an item';

  goalText: string= 'My first life goal';

  // goals = [];
  // goals = ['My first life goal', 'I want to climb a mountain', 'Go ice skiing']; // changed/commented because of the DataServices import and dependency injection in the constructor. Changed to ...
  goals = [];

  // Constructor
  constructor(private _data: DataService) { } // create an instance of DataServices via dependency injection called _data

  // life-cycle hook, initiated when app/component loads
  ngOnInit() {
    // this.itemCount = this.goals.length;
    // include from DataServices
    this._data.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length; // reposition from the top
    this._data.changeGoal(this.goals);
  }

  // Method
  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
    // include from DataServices
    this._data.changeGoal(this.goals);
  }

  // Remove item method
  removeItem(i) {
    this.goals.splice(i, 1);
    // include from DataServices
    this._data.changeGoal(this.goals);
    // this._data.changeGoal( this.goals.splice(i, 1) ); // this will remove all goals at once
  }

}
