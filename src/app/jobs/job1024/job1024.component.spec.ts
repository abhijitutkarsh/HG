import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job1024Component } from './job1024.component';

describe('Job1024Component', () => {
  let component: Job1024Component;
  let fixture: ComponentFixture<Job1024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Job1024Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Job1024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
