import { Component, OnInit } from '@angular/core';
import { User } from '../../contract';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss']
})
export class LeaderboardPagePage implements OnInit {
  dataList: User[];

  constructor(private readonly userService: UserService) {}

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
  ngOnInit() {
    this.dataList = [];
    this.userService
      .getGlobalLeaderboard()
      .then(response => this.dataList.push(...response.users));
  }
}
