import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDisplayComponent } from './components/error-display/error-display.component';
import { StartedCoursesPipe } from './pipes/started-courses.pipe';



@NgModule({
  declarations: [
    ErrorDisplayComponent,
    StartedCoursesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorDisplayComponent,
    StartedCoursesPipe
  ]
})
export class SharedModule { }
