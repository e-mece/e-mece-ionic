import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventDetailPage } from './event-detail.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [EventDetailPage],
  declarations: [EventDetailPage]
})
export class EventDetailPageModule {}
