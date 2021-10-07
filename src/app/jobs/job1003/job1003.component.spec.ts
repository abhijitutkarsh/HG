import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job1003Component } from './job1003.component';

describe('Job1003Component', () => {
  let component: Job1003Component;
  let fixture: ComponentFixture<Job1003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Job1003Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Job1003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
