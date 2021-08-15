import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableComponent } from './observable/observable.component';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { ServiceChildComponent } from './service-example/service-child/service-child.component';
import { ServiceGrandChildComponent } from './service-example/service-child/service-grand-child/service-grand-child.component';
import { TimerBuiltinComponent } from './observable/timer-builtin/timer-builtin.component';
import { TimerCustomComponent } from './observable/timer-custom/timer-custom.component';
import { SubjectTimerComponent } from './observable/subject-timer/subject-timer.component';



@NgModule({
  declarations: [
    ObservableComponent,
    ServiceExampleComponent,
    ServiceChildComponent,
    ServiceGrandChildComponent,
    TimerBuiltinComponent,
    TimerCustomComponent,
    SubjectTimerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ServiceChildComponent,
    ObservableComponent,
    ServiceExampleComponent,
    ServiceGrandChildComponent
  ]
})
export class DemoModule { }
