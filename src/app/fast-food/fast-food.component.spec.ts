import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastFoodComponent } from './fast-food.component';

describe('FastFoodComponent', () => {
  let component: FastFoodComponent;
  let fixture: ComponentFixture<FastFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
