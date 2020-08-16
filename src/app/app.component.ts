import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from './store';
import * as testActions from './store/test/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(new testActions.TestAction('Hello!'));
  }
}
