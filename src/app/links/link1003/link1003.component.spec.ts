import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link1003Component } from './link1003.component';

describe('Link1003Component', () => {
  let component: Link1003Component;
  let fixture: ComponentFixture<Link1003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Link1003Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Link1003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
