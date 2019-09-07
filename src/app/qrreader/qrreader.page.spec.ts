import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrreaderPage } from './qrreader.page';

describe('QrreaderPage', () => {
  let component: QrreaderPage;
  let fixture: ComponentFixture<QrreaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrreaderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrreaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
