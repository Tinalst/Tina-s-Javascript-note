import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenceComponent } from './sence.component';

describe('SenceComponent', () => {
  let component: SenceComponent;
  let fixture: ComponentFixture<SenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
