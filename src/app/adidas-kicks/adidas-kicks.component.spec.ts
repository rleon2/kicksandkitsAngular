import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdidasKicksComponent } from './adidas-kicks.component';

describe('AdidasKicksComponent', () => {
  let component: AdidasKicksComponent;
  let fixture: ComponentFixture<AdidasKicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdidasKicksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdidasKicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
