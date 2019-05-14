import { Component, OnInit } from '@angular/core';

import { userI } from '../../models/user.interface'
import { UsersService } from '../../services/user.service'
import { ActivatedRoute } from '@angular/router'
import { NavController, LoadingController } from '@ionic/angular'

import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private userService: UsersService,
    private route: ActivatedRoute,
    private nav: NavController,
    private loadingController: LoadingController,
    public alertController: AlertController
  ) { }

  addUser: boolean = false;
  users: userI[];
  user: userI = {
    name: "zidanecla2",
    password: "",
    tags: []
  }
  userId = null;

  ngOnInit() {
    this.addUser = false;
    this.userService.getUsers().subscribe(res => { this.users = res })
    this.userId = this.route.snapshot.params['id'];
  }

  async login() {
    this.userService.getUser(this.user.name).subscribe(res => { this.userService.selectedUser = res }) 
    if (this.userService.selectedUser != null) 
    {
      await this.successfullAlert();
      this.nav.navigateForward('/')
      this.userService.loggedIn = true;
    }
    else
      await this.unsuccesfullAlert();
  }

  async saveUser() {

    // if there is an user add
    if (this.addUser) {
      const loading = await this.loadingController.create({
        message: 'Creating user...'
      });
      await loading.present();

      this.userService.addUser(this.user.name,this.user)
        loading.dismiss()
        this.nav.navigateForward('/')
      
      this.user.name = ""
      this.user.password = ""
    }

    // change the BOOL of addUser
    this.addUser ? this.addUser = false : this.addUser = true
  }

  changeVisibility() {
    this.addUser = false
  }

  async successfullAlert() {
    const alert = await this.alertController.create({
      header: 'Success!',      
      message: 'Login succesful',
      buttons: ['OK']
    });

    await alert.present();
  }

  async unsuccesfullAlert() {
    const alert = await this.alertController.create({
      header: 'Incorrect',      
      message: 'Credentials are not correct :c',
      buttons: ['OK']
    });

    await alert.present();
  }



}
