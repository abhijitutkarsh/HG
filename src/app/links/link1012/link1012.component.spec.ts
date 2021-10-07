import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link1012Component } from './link1012.component';

describe('Link1012Component', () => {
  let component: Link1012Component;
  let fixture: ComponentFixture<Link1012Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Link1012Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Link1012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
