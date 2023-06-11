import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  letters = ['E', 'L','H', 'O', 'R', 'A', 'F', 'I'];
  positions = [5,11, 18, 24.5,31, 37.5, 43.5, 47.5];
}
