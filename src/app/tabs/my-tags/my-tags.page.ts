import { Component, OnInit } from '@angular/core';

import { userI } from '../../models/user.interface'
import { UsersService } from '../../services/user.service'
import { ActivatedRoute } from '@angular/router'
import { NavController, LoadingController } from '@ionic/angular'

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-my-tags',
  templateUrl: './my-tags.page.html',
  styleUrls: ['./my-tags.page.scss'],
})
export class MyTagsPage implements OnInit {

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
    private nav: NavController,
    private loadingController: LoadingController,
    public alertController: AlertController
  ) { }


  users: userI[];
  user: userI = {
    name: "",
    password: "",
    tags: []
  }

  newTags: string[];

  ngOnInit() {
    this.userService.getUser(this.userService.selectedUser.name).subscribe(res => { console.log(res) })
  }

  test(value) {
    // console.log(value)
    this.newTags = value
    console.log(value)
    // this.user.tag
  }

  updateTags() {
    this.userService.updateUser(this.user, this.user.name);
  }

}
