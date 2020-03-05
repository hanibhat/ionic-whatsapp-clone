import { Component, OnInit, ViewChild } from "@angular/core";
import { IonSegment, IonSlides } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  @ViewChild("slider", { read: undefined, static: false }) slider: IonSlides;
  @ViewChild("segment", { read: undefined, static: false }) segment: IonSegment;
  slideOpts = {
    initialSlide: 1,
    speed: 100
  };

  constructor() {}

  ngOnInit() {}

  async segmentChanged(event: any) {
    // get the id of the current slide as number
    const slideId = +(event.detail.value as string).replace("ion-sb-", "");
    // slide to the selected segment
    await this.slider.slideTo(slideId, 100);
  }

  async slideChanged() {
    // set the segment to the active slide
    this.segment.value =
      "ion-sb-" + (await this.slider.getActiveIndex()).toString();
  }
}
