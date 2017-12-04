import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import the compoents you want to have routing for
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

// set up your paths inside the array []
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about/:id', // add one or multiple route parameter(s) /:id 
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
