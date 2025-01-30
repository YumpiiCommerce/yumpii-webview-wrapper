import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MainCategorizedContainerComponent } from './main-categorized.container';

describe('MainContainerComponent', () => {
  let component: MainCategorizedContainerComponent;
  let fixture: ComponentFixture<MainCategorizedContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MainCategorizedContainerComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCategorizedContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
