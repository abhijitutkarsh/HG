import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link1021Component } from './link1021.component';

describe('Link1021Component', () => {
  let component: Link1021Component;
  let fixture: ComponentFixture<Link1021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Link1021Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Link1021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
