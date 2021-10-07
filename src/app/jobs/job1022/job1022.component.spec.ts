import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job1022Component } from './job1022.component';

describe('Job1022Component', () => {
  let component: Job1022Component;
  let fixture: ComponentFixture<Job1022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Job1022Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Job1022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
