import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { Component, ViewChild, OnInit } from '@angular/core';
import { EventDetailPage } from '../event-detail/event-detail.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;

  dataList: any;
  dataArray: any;
  constructor(private readonly modalController: ModalController) {}

  slideOpts = {
    initialSlide: 0,
    speed: 50,
    autoplay: true,
    on: {
      beforeInit() {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true
        };
        swiper.params = Object.assign(swiper.params, overwriteParams);
        swiper.params = Object.assign(swiper.originalParams, overwriteParams);
      },
      setTranslate() {
        const swiper = this;
        const { slides } = swiper;
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = swiper.slides.eq(i);
          const offset$$1 = $slideEl[0].swiperSlideOffset;
          let tx = -offset$$1;
          if (!swiper.params.virtualTranslate) {
            tx -= swiper.translate;
          }
          let ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
          }
          const slideOpacity = swiper.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
            : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
          $slideEl
            .css({
              opacity: slideOpacity
            })
            .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
        }
      },
      setTransition(duration) {
        const swiper = this;
        const { slides, $wrapperEl } = swiper;
        slides.transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0) {
          let eventTriggered = false;
          slides.transitionEnd(() => {
            if (eventTriggered) {
              return;
            }
            if (!swiper || swiper.destroyed) {
              return;
            }
            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
            triggerEvents.forEach(triggerEvent =>
              $wrapperEl.trigger(triggerEvent)
            );
          });
        }
      }
    }
  };

  ngOnInit(): void {
    this.dataList = [];

    for (let i = 0; i < 25; i++) {
      this.dataList.push({
        image:
          'http://www.guliver.mk/wp-content/themes/sw_chamy/assets/img/placeholder/thumbnail.png',
        name: 'Event Name ' + this.dataList.length,
        address: 'Event Address ' + this.dataList.length,
        time: 'Event Time ' + this.dataList.length
      });
    }

    this.dataArray = [
      {
        address:
          'https://cdnuploads.aa.com.tr/uploads/Contents/2019/08/02/thumbs_b_c_540098f6d4a155b7737f85c8722cb588.jpg',
        label: '1'
      },
      {
        address:
          'https://cdnuploads.aa.com.tr/uploads/Contents/2019/08/02/thumbs_b_c_540098f6d4a155b7737f85c8722cb588.jpg',
        label: '2'
      },
      {
        address:
          'https://cdnuploads.aa.com.tr/uploads/Contents/2019/08/02/thumbs_b_c_540098f6d4a155b7737f85c8722cb588.jpg',
        label: '3'
      }
    ];
  }

  async presentModal(item: any) {
    const modal = await this.modalController.create({
      component: EventDetailPage,
      componentProps: { event: item }
    });
    return await modal.present();
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      for (let i = 0; i < 25; i++) {
        this.dataList.push({
          image:
            'http://www.guliver.mk/wp-content/themes/sw_chamy/assets/img/placeholder/thumbnail.png',
          name: 'Event Name ' + this.dataList.length,
          address: 'Event Address ' + this.dataList.length,
          time: 'Event Time ' + this.dataList.length
        });
      }
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.dataList.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
