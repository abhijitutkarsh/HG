import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementcontentComponent } from './placementcontent.component';

describe('PlacementcontentComponent', () => {
  let component: PlacementcontentComponent;
  let fixture: ComponentFixture<PlacementcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
