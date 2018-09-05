import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonModelComponent } from './json-model.component';

describe('JsonModelComponent', () => {
  let component: JsonModelComponent;
  let fixture: ComponentFixture<JsonModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
