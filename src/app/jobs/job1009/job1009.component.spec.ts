import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job1009Component } from './job1009.component';

describe('Job1009Component', () => {
  let component: Job1009Component;
  let fixture: ComponentFixture<Job1009Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Job1009Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Job1009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
