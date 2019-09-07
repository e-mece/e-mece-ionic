import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QrreaderPage } from './qrreader.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: QrreaderPage }])
  ],
  declarations: [QrreaderPage],
  exports: [QrreaderPage]
})
export class QrreaderPageModule {}
