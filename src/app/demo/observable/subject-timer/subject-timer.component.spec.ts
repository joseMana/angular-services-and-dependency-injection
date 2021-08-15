import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectTimerComponent } from './subject-timer.component';

describe('SubjectTimerComponent', () => {
  let component: SubjectTimerComponent;
  let fixture: ComponentFixture<SubjectTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
