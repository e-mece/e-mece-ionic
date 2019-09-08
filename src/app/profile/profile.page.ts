import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QrreaderPage } from '../qrreader/qrreader.page';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  public myQRString;
  constructor(private readonly modalController: ModalController, public readonly authService: AuthService) {
    this.myQRString = 'www.google.com';
  }

  async presentModal(item: any) {
    const modal = await this.modalController.create({
      component: QrreaderPage,
      componentProps: { event: item }
    });
    return await modal.present();
  }

  ngOnInit() {}
}
