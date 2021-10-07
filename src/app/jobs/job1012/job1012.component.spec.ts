import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job1012Component } from './job1012.component';

describe('Job1012Component', () => {
  let component: Job1012Component;
  let fixture: ComponentFixture<Job1012Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Job1012Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Job1012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
