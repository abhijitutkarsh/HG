import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link1010Component } from './link1010.component';

describe('Link1010Component', () => {
  let component: Link1010Component;
  let fixture: ComponentFixture<Link1010Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Link1010Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Link1010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
