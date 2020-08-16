import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndivisualContributionComponent } from './indivisual-contribution.component';

describe('IndivisualContributionComponent', () => {
  let component: IndivisualContributionComponent;
  let fixture: ComponentFixture<IndivisualContributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndivisualContributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndivisualContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
