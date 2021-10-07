import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link1022Component } from './link1022.component';

describe('Link1022Component', () => {
  let component: Link1022Component;
  let fixture: ComponentFixture<Link1022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Link1022Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Link1022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
