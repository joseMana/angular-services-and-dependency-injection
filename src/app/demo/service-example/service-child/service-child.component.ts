import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/core/services/counter.service';

@Component({
  selector: 'app-service-child',
  templateUrl: './service-child.component.html',
  styleUrls: ['./service-child.component.scss']
})
export class ServiceChildComponent implements OnInit {

  public currentCount: number;

  constructor(
    private counterService: CounterService
  ) { }

  ngOnInit(): void {
    this.currentCount = this.counterService.getCurrentCount();
  }

  public onCountIncrement(): void {
    this.counterService.incrementCount();

    this.currentCount = this.counterService.getCurrentCount();
  }

  public onRefreshCount(): void {
    this.currentCount = this.counterService.getCurrentCount();
  }

}
