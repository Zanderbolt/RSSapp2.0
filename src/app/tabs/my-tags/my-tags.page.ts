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
  user: userI = this.userService.selectedUser;

  newTags: string[];

  ngOnInit() {
     this.userService.getUser(this.userService.selectedUser.name).subscribe(res => { this.user = res })
    console.log(this.user.tags)
  }

  addTags(value) {
    console.log(this.user.tags)
    this.newTags = value
    for (let i = 0; i < this.newTags.length ; i++)
    {
      this.user.tags.push(this.newTags[i]);
    }    
    this.updateTags();
  }

  updateTags() {
    this.userService.updateUser(this.user, this.user.name);
  }

  deleteTag(tag: number) {
    this.user.tags.splice(tag,1);
    this.updateTags();
  }

}
