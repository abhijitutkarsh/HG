import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link1001Component } from './link1001.component';

describe('Link1001Component', () => {
  let component: Link1001Component;
  let fixture: ComponentFixture<Link1001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Link1001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Link1001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
