import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss']
})
export class EventDetailPage implements OnInit {
  constructor(
    private readonly modalController: ModalController,
    private readonly navParams: NavParams
  ) {}

  ngOnInit() {
    console.log(this.navParams.get('event'));
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
