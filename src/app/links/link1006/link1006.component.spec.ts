import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link1006Component } from './link1006.component';

describe('Link1006Component', () => {
  let component: Link1006Component;
  let fixture: ComponentFixture<Link1006Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Link1006Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Link1006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
