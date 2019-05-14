import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/user.service'

import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})


export class TabsPage implements OnInit {
  constructor(private userService: UsersService,
              public alertController: AlertController
  ) { }
  

  ngOnInit() {
   
  }

  logOut() {
    this.succesfullAlert();
    this.userService.loggedIn = false;
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
