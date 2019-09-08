import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';
import { QRCodeModule } from 'angularx-qrcode';
import { CreatedEventsPageModule } from '../created-events/created-events.module';
import { RegisteredEventsPageModule } from '../registered-events/registered-events.module';
import { CreatedEventsPage } from '../created-events/created-events.page';
import { RegisteredEventsPage } from '../registered-events/registered-events.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CreatedEventsPageModule,
    RegisteredEventsPageModule,
    QRCodeModule
  ],
  declarations: [ProfilePage],
  entryComponents: [CreatedEventsPage, RegisteredEventsPage]
})
export class ProfilePageModule {}
