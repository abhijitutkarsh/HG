import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job1007Component } from './job1007.component';

describe('Job1007Component', () => {
  let component: Job1007Component;
  let fixture: ComponentFixture<Job1007Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Job1007Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Job1007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
