import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { CourseModule } from './course/course.module';
import { SharedModule } from './shared/shared.module';
import { DemoModule } from './demo/demo.module';
import { CounterService } from './core/services/counter.service';
import { LoggerService } from './core/services/logger.service';
import { CourseService } from './core/services/course.service';
import { ExtendedCounterService } from './core/services/extended-counter.service';
import { configUrlToken } from './shared/constants/injection-tokens';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    CourseModule,
    SharedModule,
    DemoModule
  ],
  providers: [
    {
      provide: configUrlToken,
      useValue: 'https://my.api.com/',
      multi: true
    },
    {
      provide: configUrlToken,
      useValue: 'https://my.api2.com/',
      multi: true
    },
    {
      provide: CounterService,
      useExisting: ExtendedCounterService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
