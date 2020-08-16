import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveDonationComponent } from './save-donation.component';

describe('SaveDonationComponent', () => {
  let component: SaveDonationComponent;
  let fixture: ComponentFixture<SaveDonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveDonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
