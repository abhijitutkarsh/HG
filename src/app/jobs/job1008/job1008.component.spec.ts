import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job1008Component } from './job1008.component';

describe('Job1008Component', () => {
  let component: Job1008Component;
  let fixture: ComponentFixture<Job1008Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Job1008Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Job1008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
