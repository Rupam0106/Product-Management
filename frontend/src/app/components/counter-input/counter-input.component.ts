import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from 'src/app/state/action/counter.actions';
import { CounterState } from 'src/app/state/counter.state';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css'],
})
export class CounterInputComponent {
  value: number = 0;
  constructor(private store: Store<{ counter: CounterState }>) {}
  onAdd() {
    this.store.dispatch(customIncrement({ count: +this.value }));
  }
}
