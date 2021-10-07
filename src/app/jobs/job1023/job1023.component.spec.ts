import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job1023Component } from './job1023.component';

describe('Job1023Component', () => {
  let component: Job1023Component;
  let fixture: ComponentFixture<Job1023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Job1023Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Job1023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
