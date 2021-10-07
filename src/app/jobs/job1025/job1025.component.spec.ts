import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job1025Component } from './job1025.component';

describe('Job1025Component', () => {
  let component: Job1025Component;
  let fixture: ComponentFixture<Job1025Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Job1025Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Job1025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
