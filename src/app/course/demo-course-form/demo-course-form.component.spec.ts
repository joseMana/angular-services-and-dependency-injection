import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCourseFormComponent } from './demo-course-form.component';

describe('DemoCourseFormComponent', () => {
  let component: DemoCourseFormComponent;
  let fixture: ComponentFixture<DemoCourseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoCourseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
