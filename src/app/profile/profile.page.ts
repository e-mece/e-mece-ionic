import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QrreaderPage } from '../qrreader/qrreader.page';
import { StateService } from '../services/state.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  constructor(
    private readonly modalController: ModalController,
    public readonly stateService: StateService
  ) {}

  async presentModal(item: any) {
    const modal = await this.modalController.create({
      component: QrreaderPage,
      componentProps: { event: item }
    });
    return await modal.present();
  }

  ngOnInit() {}
}
