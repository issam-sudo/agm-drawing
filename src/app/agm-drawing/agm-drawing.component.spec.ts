import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgmDrawingComponent } from './agm-drawing.component';

describe('AgmDrawingComponent', () => {
  let component: AgmDrawingComponent;
  let fixture: ComponentFixture<AgmDrawingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgmDrawingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgmDrawingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
