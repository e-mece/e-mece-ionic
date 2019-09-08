import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QrreaderPage } from '../qrreader/qrreader.page';
import { StateService } from '../services/state.service';
import { RegisteredEventsPage } from '../registered-events/registered-events.page';
import { NgModel } from '@angular/forms';
import { CreatedEventsPage } from '../created-events/created-events.page';
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

  async presentRegisteredEventsModal() {
    await this.modalController
      .create({
        component: RegisteredEventsPage
      })
      .then(async modal => await modal.present());
  }

  async presentCreatedEventsModal() {
    await this.modalController
      .create({
        component: CreatedEventsPage
      })
      .then(async modal => await modal.present());
  }

  ngOnInit() {}
}
