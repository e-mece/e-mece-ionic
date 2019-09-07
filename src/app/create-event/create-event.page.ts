import { Component, OnInit } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import {
  ImageResizer,
  ImageResizerOptions
} from '@ionic-native/image-resizer/ngx';

@Component({
  selector: 'app-create-event',
  templateUrl: 'create-event.page.html',
  styleUrls: ['create-event.page.scss']
})
export class CreateEventPage {
  imageResponse: any;
  options: any;

  constructor(
    private imagePicker: ImagePicker,
    private imageResizer: ImageResizer
  ) {}

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
      outputType: 0
    };
    this.imageResponse = [];
    this.imagePicker.getPictures(this.options).then(
      results => {
        for (var i = 0; i < results.length; i++) {
          //const u = 'data:image/jpeg;base64,' + results[i];

          const u = results[i];
          console.log(u);
          this.imageResponse.push(u);
          let options = {
            uri: u,
            folderName: 'Protonet',
            quality: 90,
            width: 10,
            height: 10
          } as ImageResizerOptions;
          this.imageResizer
            .resize(options)
            .then((filePath: string) => console.log('FilePath', filePath))
            .catch(e => console.log(e));
        }
      },
      err => {
        alert(err);
      }
    );
  }
}
