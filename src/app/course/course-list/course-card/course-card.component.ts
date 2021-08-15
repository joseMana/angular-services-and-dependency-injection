import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Course } from '../../../shared/models/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input() course: Course;
  @Output() courseStarted = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void { }

  public startCourse(event): void {
    // You can event object passed from the template to access event properties
    // e.g. stopPropagation() and preventDefault() methods
    // event.stopPropagation() or event.preventDefault()

    // defensive coding
    if (!this.course) {
      return;
    }

    this.courseStarted.emit(this.course);
  }
}
