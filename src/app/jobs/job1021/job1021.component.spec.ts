import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job1021Component } from './job1021.component';

describe('Job1021Component', () => {
  let component: Job1021Component;
  let fixture: ComponentFixture<Job1021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Job1021Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Job1021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
