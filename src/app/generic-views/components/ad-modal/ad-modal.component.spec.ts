import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdModalComponent } from './ad-modal.component';

describe('AdModalComponent', () => {
  let component: AdModalComponent;
  let fixture: ComponentFixture<AdModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AdModalComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
