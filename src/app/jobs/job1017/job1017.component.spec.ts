import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job1017Component } from './job1017.component';

describe('Job1017Component', () => {
  let component: Job1017Component;
  let fixture: ComponentFixture<Job1017Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Job1017Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Job1017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
