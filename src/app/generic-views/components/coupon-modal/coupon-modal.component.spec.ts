import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CouponModalComponent } from './coupon-modal.component';

describe('AdModalComponent', () => {
  let component: CouponModalComponent;
  let fixture: ComponentFixture<CouponModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CouponModalComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
