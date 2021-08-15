import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseCardComponent } from './course-list/course-card/course-card.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DemoCourseFormComponent } from './demo-course-form/demo-course-form.component';
import { DemoLifecycleComponent } from './demo-lifecycle/demo-lifecycle.component';
import { ChildComponent } from './demo-lifecycle/child/child.component';
import { CourseService } from '../core/services/course.service';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseCardComponent,
    CourseFormComponent,
    DemoCourseFormComponent,
    DemoLifecycleComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  exports: [
    CourseListComponent,
    CourseCardComponent,
    DemoCourseFormComponent,
    DemoLifecycleComponent
  ]
})
export class CourseModule { }
