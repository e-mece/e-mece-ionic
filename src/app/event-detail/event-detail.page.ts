import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Event, User } from '../../contract';
import { EventService } from '../services/event.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss']
})
export class EventDetailPage implements OnInit {
  eventM: Event;
  creator: User;
  participants: User[];
  constructor(
    private readonly modalController: ModalController,
    private readonly navParams: NavParams,
    private readonly eventService: EventService,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.loadingController
      .create({
        message: 'Yükleniyor',
        duration: 20000
      })
      .then(loading => loading.present());

    this.eventService
      .getEventWithParticipants(this.navParams.get('event').id)
      .then(response => {
        this.eventM = response.event;
        this.creator = response.creator;
        this.participants = response.participants;
      })
      .finally(() => this.loadingController.dismiss());
  }

  dismiss() {
    this.modalController.dismiss();
  }

  async registerToEvent() {
    this.loadingController
      .create({
        message: 'Kaydoluyor',
        duration: 20000
      })
      .then(loading => loading.present());
    this.eventService
      .enrollToEvent(this.eventM.id)
      .finally(() => this.loadingController.dismiss());
  }
}
