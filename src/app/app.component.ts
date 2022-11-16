import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test app';
  constructor(
    private router: Router,
  ) {}
  goToUser(){
    this.router.navigate(['home/User']);
    console.log("hello")
  
  }


}


