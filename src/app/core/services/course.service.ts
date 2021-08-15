import { Injectable } from '@angular/core';
import { Course } from 'src/app/shared/models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  public getCourses(): Course[] {
    const courses = [
      {
        title: 'Angular 10',
        description: 'Angular is a platform for building mobile and desktop web applications.',
        price: 700,
        duration: 24,
        imageUrl: 'https://picsum.photos/100/100',
        isActive: true,
        promoCode: ''
      }, {
        title: 'ReactJs',
        description: 'A JavaScript library for building user interfaces, maintained by Facebook',
        price: 500,
        duration: 24,
        imageUrl: 'https://picsum.photos/100/100',
        isActive: true,
        promoCode: ''
      }, {
        title: 'VueJs',
        description: 'The Progressive JavaScript Framework.',
        price: 450,
        duration: 24,
        imageUrl: 'https://picsum.photos/100/100',
        isActive: true,
        promoCode: ''
      }
    ];

    return courses;
  }
}
