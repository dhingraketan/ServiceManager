import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCodePopupComponent } from './upload-code-popup.component';

describe('UploadCodePopupComponent', () => {
  let component: UploadCodePopupComponent;
  let fixture: ComponentFixture<UploadCodePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadCodePopupComponent]
    });
    fixture = TestBed.createComponent(UploadCodePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
