import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job1015Component } from './job1015.component';

describe('Job1015Component', () => {
  let component: Job1015Component;
  let fixture: ComponentFixture<Job1015Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Job1015Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Job1015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
