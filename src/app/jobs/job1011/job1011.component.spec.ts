import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job1011Component } from './job1011.component';

describe('Job1011Component', () => {
  let component: Job1011Component;
  let fixture: ComponentFixture<Job1011Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Job1011Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Job1011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
