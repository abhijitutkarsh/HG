import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job1016Component } from './job1016.component';

describe('Job1016Component', () => {
  let component: Job1016Component;
  let fixture: ComponentFixture<Job1016Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Job1016Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Job1016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
