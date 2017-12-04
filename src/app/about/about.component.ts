import { Component, OnInit } from '@angular/core';

// add import to retrieve url parameter / route parameter
// give access to the route parameters
import { ActivatedRoute } from '@angular/router'; 

// add import of router
import { Router } from '@angular/router';

// import DataService 
import { DataService } from '../data.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // define goals
  goals: any;

  // create an instance of ActivatedRouted via dependency injection
  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) { 
    this.route.params.subscribe(res => console.log(res.id)); // this will fetch the route parameter on the about page // also add an instance of DataServices via dependency injection called _data
  }

  ngOnInit() {
    // include from DataServices
    this._data.goal.subscribe(res => this.goals = res);
  }

  sendMeHome() {
    this.router.navigate(['']); // the '' is the home path in the app-routing.module
  }

}
