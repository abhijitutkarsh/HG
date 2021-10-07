import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job1020Component } from './job1020.component';

describe('Job1020Component', () => {
  let component: Job1020Component;
  let fixture: ComponentFixture<Job1020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Job1020Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Job1020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
