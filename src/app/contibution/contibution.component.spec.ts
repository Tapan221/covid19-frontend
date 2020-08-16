import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContibutionComponent } from './contibution.component';

describe('ContibutionComponent', () => {
  let component: ContibutionComponent;
  let fixture: ComponentFixture<ContibutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContibutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContibutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
