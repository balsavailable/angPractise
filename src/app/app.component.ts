import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'food-app';
  ngOnInit()
  {
    console.log('ng onint of app component called');
  }

  
 constructor()
 {
  console.log('constructor of app component called');
 }
}
