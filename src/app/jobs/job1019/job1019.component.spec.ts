import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job1019Component } from './job1019.component';

describe('Job1019Component', () => {
  let component: Job1019Component;
  let fixture: ComponentFixture<Job1019Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Job1019Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Job1019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
