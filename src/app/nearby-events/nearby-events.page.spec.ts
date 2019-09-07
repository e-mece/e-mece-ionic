import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NearbyEventsPage } from './nearby-events.page';

describe('NearbyEventsPage', () => {
  let component: NearbyEventsPage;
  let fixture: ComponentFixture<NearbyEventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NearbyEventsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NearbyEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
