import { Component, OnInit } from '@angular/core';
import { State } from '../_models/state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  state: State = State.search;
  searchQuery;
  constructor() {}

  ngOnInit(): void {}

  submitLink() {
    console.log(this.searchQuery);
  }
}
