import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/user.service'

import { AlertController } from '@ionic/angular';
import { NavController, LoadingController } from '@ionic/angular'


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})


export class TabsPage implements OnInit {
  constructor(private userService: UsersService,
              public alertController: AlertController,
              private nav: NavController,
  ) { }
  

  ngOnInit() {
   
  }

  logOut() {
    this.succesfullAlert();
    this.userService.loggedIn = false;
    this.nav.navigateForward('/')
    this.userService.mostrarCiencia = true
    this.userService.mostrarCultura = true
    this.userService.mostrarModa = true
    this.userService.mostrarNegocios = true
  }

  test() {
    console.log(this.userService.selectedUser.tags);
    console.log(this.userService.mostrarCiencia);
    console.log(this.userService.mostrarCultura);
    console.log(this.userService.mostrarModa);
    console.log(this.userService.mostrarNegocios);
  }

  async succesfullAlert() {
    const alert = await this.alertController.create({
      header: 'Correct',      
      message: 'Log Out Successfull, Come back soon!',
      buttons: ['OK']
    });

    await alert.present();
  }

}
