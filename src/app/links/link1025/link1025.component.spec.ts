import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link1025Component } from './link1025.component';

describe('Link1025Component', () => {
  let component: Link1025Component;
  let fixture: ComponentFixture<Link1025Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Link1025Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Link1025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
