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

  // // For image upload
  // cropUpload() {
  //   this.imagePicker.getPictures({ maximumImagesCount: 1, outputType: 0 }).then(
  //     results => {
  //       for (let i = 0; i < results.length; i++) {
  //         window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
  //           console.log('file system open: ' + fs.name);
  //           fs.root.getFile(results[i], { create: true, exclusive: false }, function (fileEntry) {
  //               fileEntry.file((file) => {
  //                   var reader = new FileReader();
  //                   reader.onloadend = () => {
  //                       // Create a blob based on the FileReader "result", which we asked to be retrieved as an ArrayBuffer
  //                       var blob = new Blob([new Uint8Array(this.result)], { type: "image/png" });
  //                       var oReq = new XMLHttpRequest();
  //                       oReq.open("POST", "http://mysweeturl.com/upload_handler", true);
  //                       oReq.onload = (oEvent) => {
  //                           // all done!
  //                       };
  //                       // Pass the blob in to XHR's send method
  //                       oReq.send(blob);
  //                   };
  //                   // Read the file as an ArrayBuffer
  //                   reader.readAsArrayBuffer(file);
  //               }, (err) => { console.error('error getting fileentry file!' + err); });
  //           }, (err) => { console.error('error getting file! ' + err); });
  //       },  (err) => { console.error('error getting persistent fs! ' + err); });
  //           },
  //           error => console.error("Error cropping image", error)
  //         );
}
