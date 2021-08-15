import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerBuiltinComponent } from './timer-builtin.component';

describe('TimerBuiltinComponent', () => {
  let component: TimerBuiltinComponent;
  let fixture: ComponentFixture<TimerBuiltinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerBuiltinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerBuiltinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
