import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss']
})
export class LeaderboardPagePage implements OnInit {
  dataList: any;
  constructor() {
    this.dataList = [];

    for (let i = 0; i < 25; i++) {
      this.dataList.push({
        image:
          'http://www.guliver.mk/wp-content/themes/sw_chamy/assets/img/placeholder/thumbnail.png',
        name: 'Name ' + this.dataList.length,
        surname: 'Surname ' + this.dataList.length,
        color: this.itemColor(i)
      });
    }
  }

  itemColor(i: number) {
    if (i === 0) {
      return 'primary';
    } else if (i === 1) {
      return 'secondary';
    } else if (i === 2) {
      return 'tertiery';
    } else {
      return '';
    }
  }
  ngOnInit() {}
}
