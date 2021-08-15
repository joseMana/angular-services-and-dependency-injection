import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer-builtin',
  templateUrl: './timer-builtin.component.html',
  styleUrls: ['./timer-builtin.component.scss']
})
export class TimerBuiltinComponent implements OnInit, OnDestroy {

  public counter = 0;
  public isTimerStarted = false;

  private subscriptions = new Subscription();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // unsubscribe all subscriptions added to component property subscriptions
    this.subscriptions.unsubscribe();
  }

  public executeBuiltInObservable(): void {
    if (this.isTimerStarted) { return; }

    this.isTimerStarted = true;

    const interval$ = interval(1000);

    const intervalSubscriber = interval$.subscribe(data => {
      this.counter = data;
      console.log(data);
    }, error => {
      // handle error here
    }, () => {
      // observable finishes here
    });

    // Add to subscriptions to unsubscribe on destroy
    this.subscriptions.add(intervalSubscriber);
  }

}
