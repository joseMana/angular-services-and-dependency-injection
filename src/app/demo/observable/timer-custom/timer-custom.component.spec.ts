import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerCustomComponent } from './timer-custom.component';

describe('TimerCustomComponent', () => {
  let component: TimerCustomComponent;
  let fixture: ComponentFixture<TimerCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
