// Angular 5 Services: - Access code across components without creating or re-writing the same code 
// in each component you can use a service file to share that data
// Service files: generally used for making http calls or for sharing data between components
import { Injectable } from '@angular/core'; //  import an Injectable

// One of the best ways to share data between components is to use RXJS Behaviour Subject Libraries
import { BehaviorSubject } from 'rxjs/BehaviorSubject'; // 

// Injectable decorator
@Injectable()
export class DataService {

  // property
  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly goal']); // set default value of goals array
  goal = this.goals.asObservable();

  constructor() { }

  // Custom method - accessible via other components
  changeGoal(goal) {
    this.goals.next(goal);
  }

}
