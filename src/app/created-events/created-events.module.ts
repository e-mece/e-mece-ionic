import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatedEventsPage } from './created-events.page';
import { QrreaderPageModule } from '../qrreader/qrreader.module';
import { QrreaderPage } from '../qrreader/qrreader.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, QrreaderPageModule],
  declarations: [CreatedEventsPage],
  exports: [CreatedEventsPage],
  entryComponents: [QrreaderPage]
})
export class CreatedEventsPageModule {}
