import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from '../../shared/models/course.model';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  @ViewChild(CourseCardComponent) course1Ref: CourseCardComponent;
  @ViewChild('listTitle') listTitleRef: ElementRef;

  public courses: Course[];
  public startedCourses: Course[] = [];

  public isViewChildButtonClicked = false;

  constructor(
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.setInitialCourses();
  }

  public logViewChildren(): void {
    console.log(this.course1Ref);
    console.log(this.listTitleRef);

    const message1 = `The first course card that matches CourseListComponent selector has a title of ${this.course1Ref.course.title}`;
    const message2 = `The header text of list is "${this.listTitleRef.nativeElement.innerText}"`;

    console.log(message1);
    console.log(message2);
  }

  public startCourse(course: Course): void {
    // defensive coding
    if (!course) {
      return;
    }

    course.hasStarted = !course.hasStarted;

    this.startedCourses = this.courses.filter(c => c.hasStarted);
  }

  private setInitialCourses(): void {
    this.courses = this.courseService.getCourses();
  }
}
