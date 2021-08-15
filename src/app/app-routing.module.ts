import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseFormComponent } from './course/course-form/course-form.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { DemoCourseFormComponent } from './course/demo-course-form/demo-course-form.component';
import { DemoLifecycleComponent } from './course/demo-lifecycle/demo-lifecycle.component';
import { ObservableComponent } from './demo/observable/observable.component';
import { ServiceExampleComponent } from './demo/service-example/service-example.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/courses'
  },
  {
    path: 'courses',
    component: CourseListComponent
  },
  {
    path: 'create-course',
    component: CourseFormComponent
  },
  {
    path: 'demo-create-course',
    component: DemoCourseFormComponent
  },
  {
    path: 'lifecycle-hooks',
    component: DemoLifecycleComponent
  },
  {
    path: 'service',
    component: ServiceExampleComponent
  },
  {
    path: 'observable',
    component: ObservableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
