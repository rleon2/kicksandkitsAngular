import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NikeKicksComponent } from './nike-kicks.component';

describe('NikeKicksComponent', () => {
  let component: NikeKicksComponent;
  let fixture: ComponentFixture<NikeKicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NikeKicksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NikeKicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
