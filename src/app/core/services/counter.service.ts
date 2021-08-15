import { Injectable } from '@angular/core';
import { from, of, Observable, Subject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppModule } from 'src/app/app.module';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  public count$ = new Subject<number>();

  private count = 0;

  constructor(
    private loggerService: LoggerService
  ) { }

  public incrementCount(): void {
    this.count += 1;
    this.loggerService.logMessage(`Count has been incremented to ${this.count}.`);
  }

  public getCurrentCount(): number {
    this.loggerService.logMessage(`Current count ${this.count} has been retrieved.`);
    return this.count;
  }

  public getData(): Observable<number[]> {
    // CombineLatest sample.
    const combinedObservable = combineLatest([
      new Observable().pipe(),
      new Observable().pipe(),
    ])
    combinedObservable.pipe(map(([obs1, obs2]) => {
      // Sample piping for combined observables.
    }));

    // Create observable with a literal value;
    const x = of(2);

    // convert Promise to Observable.
    return from(this.apiCall()).
      pipe(
        map(data => [2]),
        map(data2 => data2),
        );
  }

  private apiCall(): Promise<string[]> {
    return Promise.resolve(['1', '2']);
  }
}










// this.loggerService.logMessage(`Count has been incremented to ${this.count}.`)
// this.loggerService.logMessage(`Current count ${this.count} has been retrieved.`)