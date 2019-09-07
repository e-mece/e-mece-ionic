import { Component, ViewChild } from "@angular/core";
import { IonInfiniteScroll } from "@ionic/angular";

@Component({
  selector: "app-infinite-scroll-list",
  templateUrl: "./infinite-scroll-list.component.html",
  styleUrls: ["./infinite-scroll-list.component.scss"]
})
export class InfiniteScrollListComponent {
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;

  dataList: any;
  constructor() {
    this.dataList = [];

    for (let i = 0; i < 25; i++) {
      this.dataList.push("Item number " + this.dataList.length);
    }
  }

  loadData(event) {
    setTimeout(() => {
      console.log("Done");
      for (let i = 0; i < 25; i++) {
        this.dataList.push("Item number " + this.dataList.length);
      }
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.dataList.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
