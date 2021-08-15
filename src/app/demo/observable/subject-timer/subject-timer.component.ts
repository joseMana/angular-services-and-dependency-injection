import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { CounterService } from 'src/app/core/services/counter.service';

@Component({
  selector: 'app-subject-timer',
  templateUrl: './subject-timer.component.html',
  styleUrls: ['./subject-timer.component.scss']
})
export class SubjectTimerComponent implements OnInit, OnDestroy {

  public countDisplay: number;

  private currentCount = 0;
  private subscriptions = new Subscription();

  constructor(
    private counterService: CounterService
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public incrementCount(): void {
    this.currentCount ++;
    this.counterService.count$.next(this.currentCount);
  }

  public subscribeToCount(): void {
    this.subscriptions.add(
      this.counterService.count$.subscribe(data => {
        this.countDisplay = data;
        console.log('From subscriber: ');
        console.log(data);
        console.log('-------');
      })
    );
  }

}
