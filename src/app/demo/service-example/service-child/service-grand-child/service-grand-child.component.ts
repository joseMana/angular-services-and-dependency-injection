import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component, Inject, Injectable, InjectionToken, OnInit, Optional } from '@angular/core';
import { CounterService } from 'src/app/core/services/counter.service';
import { configUrlToken } from 'src/app/shared/constants/injection-tokens';

@Component({
  selector: 'app-service-grand-child',
  templateUrl: './service-grand-child.component.html',
  styleUrls: ['./service-grand-child.component.scss'],
})
export class ServiceGrandChildComponent implements OnInit {

  public currentCount: number;

  constructor(
    @Inject(configUrlToken) private url: string[],
    @Optional()
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
