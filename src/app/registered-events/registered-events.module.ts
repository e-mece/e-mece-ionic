import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisteredEventsPage } from './registered-events.page';
import { EventDetailPageModule } from '../event-detail/event-detail.module';
import { EventDetailPage } from '../event-detail/event-detail.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, EventDetailPageModule],
  declarations: [RegisteredEventsPage],
  exports: [RegisteredEventsPage],
  entryComponents: [EventDetailPage]
})
export class RegisteredEventsPageModule {}
