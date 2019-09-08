import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { ModalController } from '@ionic/angular';
import { EventDetailPage } from '../event-detail/event-detail.page';

@Component({
  selector: 'app-registered-events',
  templateUrl: './registered-events.page.html',
  styleUrls: ['./registered-events.page.scss']
})
export class RegisteredEventsPage implements OnInit {
  constructor(
    readonly stateService: StateService,
    private readonly modalController: ModalController
  ) {}

  ngOnInit() {}

  async presentModal(item: any) {
    const modal = await this.modalController.create({
      component: EventDetailPage,
      componentProps: { event: item }
    });
    return await modal.present();
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
