import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisteredEventsPage } from './registered-events.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [RegisteredEventsPage],
  exports: [RegisteredEventsPage]
})
export class RegisteredEventsPageModule {}
