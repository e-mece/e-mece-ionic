import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardPagePage } from './leaderboard.page';

describe('LeaderboardPagePage', () => {
  let component: LeaderboardPagePage;
  let fixture: ComponentFixture<LeaderboardPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeaderboardPagePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
