import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { EventDetailPageModule } from '../event-detail/event-detail.module';
import { EventDetailPage } from '../event-detail/event-detail.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    EventDetailPageModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  entryComponents: [EventDetailPage],
  declarations: [HomePage]
})
export class HomePageModule {}
