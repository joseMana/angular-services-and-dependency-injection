import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  public logMessage(message: string): void {
    console.log(message);
  }
}
