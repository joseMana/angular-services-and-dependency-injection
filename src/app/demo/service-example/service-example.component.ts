import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/core/services/counter.service';

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.scss']
})
export class ServiceExampleComponent implements OnInit {

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
