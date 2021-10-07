import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job1018Component } from './job1018.component';

describe('Job1018Component', () => {
  let component: Job1018Component;
  let fixture: ComponentFixture<Job1018Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Job1018Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Job1018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
