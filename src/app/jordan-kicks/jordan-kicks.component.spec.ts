import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JordanKicksComponent } from './jordan-kicks.component';

describe('JordanKicksComponent', () => {
  let component: JordanKicksComponent;
  let fixture: ComponentFixture<JordanKicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JordanKicksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JordanKicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
