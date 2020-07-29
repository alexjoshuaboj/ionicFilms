import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';



@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public form: FormGroup;

  @Output() public resultApi: any;
  poster: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private serviceApi: ApiService,
    public modalCtrl: ModalController
  ) {
    this.form = this.formBuilder.group({
      search: ['', Validators.required],
    })
    this.resultApi = new Object;
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  async films() {
    var result = await this.serviceApi.getFilms(this.form.value.search);
    this.resultApi = result;
    console.log(this.resultApi);
  }

  /*   async modalInfo(pFilm) {
      const alert = await this.alertController.create({
        header: pFilm.Title,
        message: `
         Gendre: ${pFilm.Genre} 
         Year: ${pFilm.Year} 
         Director: ${pFilm.Director}`,
        buttons: ['Accept']
      });
      await alert.present();
    } */

  async modalInfo() {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
    });
    return await modal.present();
  }


  async openModalWithData() {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {
        result: this.resultApi
      }
    })
    return await modal.present();
  }

}
