import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class ExtendedCounterService extends CounterService {
  constructor(
    loggerService: LoggerService
  ) {
    super(loggerService);
  }
}
