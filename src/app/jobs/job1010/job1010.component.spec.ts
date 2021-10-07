import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job1010Component } from './job1010.component';

describe('Job1010Component', () => {
  let component: Job1010Component;
  let fixture: ComponentFixture<Job1010Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Job1010Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Job1010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
