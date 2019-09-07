import { Component } from "@angular/core";
import { Crop } from "@ionic-native/crop/ngx";
import { ImagePicker } from "@ionic-native/image-picker/ngx";

import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject
} from "@ionic-native/file-transfer/ngx";
import { PhotoService } from "../services/photo.service";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"]
})
export class Tab3Page {
  imageResponse: any;
  options: any;

  constructor(private imagePicker: ImagePicker) {}

  getImages() {
    this.options = {
      // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
      // selection of a single image, the plugin will return it.
      maximumImagesCount: 1,

      // max width and height to allow the images to be.  Will keep aspect
      // ratio no matter what.  So if both are 800, the returned image
      // will be at most 800 pixels wide and 800 pixels tall.  If the width is
      // 800 and height 0 the image will be 800 pixels wide if the source
      // is at least that wide.
      //width: 200,
      //height: 200,

      // quality of resized image, defaults to 100
      //quality: 100,

      // output type, defaults to FILE_URIs.
      // available options are
      // window.imagePicker.OutputType.FILE_URI (0) or
      // window.imagePicker.OutputType.BASE64_STRING (1)
      outputType: 1
    };
    this.imageResponse = [];
    this.imagePicker.getPictures(this.options).then(
      results => {
        console.log(results);
        for (var i = 0; i < results.length; i++) {
          this.imageResponse.push("data:image/jpeg;base64," + results[i]);
        }
      },
      err => {
        alert(err);
      }
    );
  }

}
