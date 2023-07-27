import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadConfigPopupComponent } from './upload-config-popup.component';

describe('UploadConfigPopupComponent', () => {
  let component: UploadConfigPopupComponent;
  let fixture: ComponentFixture<UploadConfigPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadConfigPopupComponent]
    });
    fixture = TestBed.createComponent(UploadConfigPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
