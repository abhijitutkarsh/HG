import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link1005Component } from './link1005.component';

describe('Link1005Component', () => {
  let component: Link1005Component;
  let fixture: ComponentFixture<Link1005Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Link1005Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Link1005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
