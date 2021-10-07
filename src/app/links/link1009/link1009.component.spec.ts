import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link1009Component } from './link1009.component';

describe('Link1009Component', () => {
  let component: Link1009Component;
  let fixture: ComponentFixture<Link1009Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Link1009Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Link1009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
