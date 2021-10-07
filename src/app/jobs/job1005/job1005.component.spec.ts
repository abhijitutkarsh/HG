import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job1005Component } from './job1005.component';

describe('Job1005Component', () => {
  let component: Job1005Component;
  let fixture: ComponentFixture<Job1005Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Job1005Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Job1005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
