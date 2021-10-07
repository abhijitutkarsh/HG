import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job1006Component } from './job1006.component';

describe('Job1006Component', () => {
  let component: Job1006Component;
  let fixture: ComponentFixture<Job1006Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Job1006Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Job1006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
