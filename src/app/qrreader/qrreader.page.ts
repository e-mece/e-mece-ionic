import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qrreader',
  templateUrl: './qrreader.page.html',
  styleUrls: ['./qrreader.page.scss']
})
export class QrreaderPage implements OnInit {
  constructor(private qrScanner: QRScanner, public router: Router) {}

  ngOnInit() {
    console.log('init');
    this.qrScanner
      .prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted
          console.log(status);
          const element = document.getElementById('main');

          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);

            this.qrScanner.hide(); // hide camera preview
            this.qrScanner.destroy(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
            const element = document.getElementById('main');
            this.router.navigate(['/tabs/profile']);
          });

          this.qrScanner.show();
          this.qrScanner.resumePreview();
        } else if (status.denied) {
          // camera permission was permanently denied
          this.qrScanner.openSettings();
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

  stop() {
    this.router.navigate(['/tabs/profile']);
  }
}
