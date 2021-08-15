import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer-custom',
  templateUrl: './timer-custom.component.html',
  styleUrls: ['./timer-custom.component.scss']
})
export class TimerCustomComponent implements OnInit, OnDestroy {

  public counter = 0;
  public isTimerStarted = false;
  public intervalSub: Subscription;

  private subscriptions = new Subscription();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public executeBuiltInObservable(): void {
    if (this.isTimerStarted) { return; }

    this.isTimerStarted = true;

    const errorMark = 10;

    const interval$ = new Observable<number>(observer => {
      let count = 0;
      setInterval(() => {
        count += 1;
        observer.next(count);

        if (count === errorMark) {
          // If observable emits error, it would be completed
          observer.error(`Count reached limit: ${errorMark}`);
        }

        if (count === 5) {
          observer.complete();
        }
      }, 1000);
    });

    const intervalSub = interval$.subscribe(data => {
      this.counter = data;
      console.log(data);
    }, error => {
      // handle error here
      // If observable emits error, it's considered completed.
      console.log(error);
    }, () => {
      // process ends here
      console.log('Count completed.');
    });

    // this.subscriptions.add(intervalSub);
  }

}
