import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job1004Component } from './job1004.component';

describe('Job1004Component', () => {
  let component: Job1004Component;
  let fixture: ComponentFixture<Job1004Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Job1004Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Job1004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
