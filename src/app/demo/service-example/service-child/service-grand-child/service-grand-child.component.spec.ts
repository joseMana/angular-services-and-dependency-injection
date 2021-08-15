import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceGrandChildComponent } from './service-grand-child.component';

describe('ServiceGrandChildComponent', () => {
  let component: ServiceGrandChildComponent;
  let fixture: ComponentFixture<ServiceGrandChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceGrandChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceGrandChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
