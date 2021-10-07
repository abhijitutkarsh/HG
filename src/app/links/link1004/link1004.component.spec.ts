import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link1004Component } from './link1004.component';

describe('Link1004Component', () => {
  let component: Link1004Component;
  let fixture: ComponentFixture<Link1004Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Link1004Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Link1004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
