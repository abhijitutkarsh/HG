import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job1014Component } from './job1014.component';

describe('Job1014Component', () => {
  let component: Job1014Component;
  let fixture: ComponentFixture<Job1014Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Job1014Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Job1014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
