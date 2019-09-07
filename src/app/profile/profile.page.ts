import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QrreaderPage } from '../qrreader/qrreader.page';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  constructor(private readonly modalController: ModalController) {}

  async presentModal(item: any) {
    const modal = await this.modalController.create({
      component: QrreaderPage,
      componentProps: { event: item }
    });
    return await modal.present();
  }

  ngOnInit() {}
}
