import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { ModalController } from '@ionic/angular';
import { QrreaderPage } from '../qrreader/qrreader.page';

@Component({
  selector: 'app-created-events',
  templateUrl: './created-events.page.html',
  styleUrls: ['./created-events.page.scss']
})
export class CreatedEventsPage implements OnInit {
  constructor(
    readonly stateService: StateService,
    private readonly modalController: ModalController
  ) {}

  ngOnInit() {}

  async presentModal(item: any) {
    const modal = await this.modalController.create({
      component: QrreaderPage,
      componentProps: { event: item }
    });
    return await modal.present();
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
