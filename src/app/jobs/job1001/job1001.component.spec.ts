import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job1001Component } from './job1001.component';

describe('Job1001Component', () => {
  let component: Job1001Component;
  let fixture: ComponentFixture<Job1001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Job1001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Job1001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
