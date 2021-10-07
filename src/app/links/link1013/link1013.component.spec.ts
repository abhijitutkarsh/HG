import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link1013Component } from './link1013.component';

describe('Link1013Component', () => {
  let component: Link1013Component;
  let fixture: ComponentFixture<Link1013Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Link1013Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Link1013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
