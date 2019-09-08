import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatedEventsPage } from './created-events.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [CreatedEventsPage],
  exports: [CreatedEventsPage]
})
export class CreatedEventsPageModule {}
