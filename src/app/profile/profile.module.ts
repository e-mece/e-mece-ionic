import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';
import { QrreaderPageModule } from '../qrreader/qrreader.module';
import { QrreaderPage } from '../qrreader/qrreader.page';

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
    QrreaderPageModule
  ],
  declarations: [ProfilePage],
  entryComponents: []
})
export class ProfilePageModule {}
