import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'nearby-events',
        loadChildren: () =>
          import('../nearby-events/nearby-events.module').then(
            m => m.NearbyEventsPageModule
          )
      },
      {
        path: 'create-event',
        loadChildren: () =>
          import('../create-event/create-event.module').then(
            m => m.Tab3PageModule
          )
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'leaderboard',
        loadChildren: () =>
          import('../leaderboard/leaderboard.module').then(
            m => m.LeaderboardPagePageModule
          )
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
