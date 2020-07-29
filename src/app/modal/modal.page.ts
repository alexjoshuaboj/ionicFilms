import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() public result: any;

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() { }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }



}
