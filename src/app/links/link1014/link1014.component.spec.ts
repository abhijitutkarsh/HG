import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link1014Component } from './link1014.component';

describe('Link1014Component', () => {
  let component: Link1014Component;
  let fixture: ComponentFixture<Link1014Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Link1014Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Link1014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
