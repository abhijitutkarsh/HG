import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link1015Component } from './link1015.component';

describe('Link1015Component', () => {
  let component: Link1015Component;
  let fixture: ComponentFixture<Link1015Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Link1015Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Link1015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
