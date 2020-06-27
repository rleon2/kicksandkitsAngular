import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PumaKicksComponent } from './puma-kicks.component';

describe('PumaKicksComponent', () => {
  let component: PumaKicksComponent;
  let fixture: ComponentFixture<PumaKicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PumaKicksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PumaKicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
