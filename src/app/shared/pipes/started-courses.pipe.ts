import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course.model';

@Pipe({
  name: 'startedCourses',
  pure: false
})
export class StartedCoursesPipe implements PipeTransform {

  transform(items: Course[]): Course[] {
    if (!items) { return null; }

    return items.filter(i => i.hasStarted);
  }

}
