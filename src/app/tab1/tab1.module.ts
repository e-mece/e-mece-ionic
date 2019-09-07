import { IonicModule, IonInfiniteScroll} from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule, Component, ViewChild, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Tab1Page } from "./tab1.page";
import { SlideComponent } from "../slide/slide.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: "", component: Tab1Page }])
  ],
  declarations: [Tab1Page, SlideComponent]
})
export class Tab1PageModule implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;

  dataList: any;
  constructor() {}

  ngOnInit() {
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
