import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job1013Component } from './job1013.component';

describe('Job1013Component', () => {
  let component: Job1013Component;
  let fixture: ComponentFixture<Job1013Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Job1013Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Job1013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
