import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job1000Component } from './job1000.component';

describe('Job1000Component', () => {
  let component: Job1000Component;
  let fixture: ComponentFixture<Job1000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Job1000Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Job1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
