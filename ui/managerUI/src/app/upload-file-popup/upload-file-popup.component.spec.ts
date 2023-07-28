import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFilePopupComponent } from './upload-file-popup.component';

describe('UploadFilePopupComponent', () => {
  let component: UploadFilePopupComponent;
  let fixture: ComponentFixture<UploadFilePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadFilePopupComponent]
    });
    fixture = TestBed.createComponent(UploadFilePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
