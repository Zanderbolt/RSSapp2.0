import { Component, OnInit, OnChanges } from '@angular/core';

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

  newTags: string[] = [];


  ngOnInit() {
     
     
  }

  addTags(value) {
      
    this.newTags = value    
    for (let i = 0; i < this.newTags.length ; i++)
    {
      if (!this.userService.selectedUser.tags.includes(this.newTags[i]))
        this.userService.selectedUser.tags.push(this.newTags[i]);
    }
  
    this.updateTags();

    setTimeout(() => { 
      this.userService.checkTags();
    }, 750);

  }

  updateTags() {
    this.userService.updateUser(this.userService.selectedUser, this.userService.selectedUser.name);
  }

  deleteTag(tag: number) {
    this.userService.selectedUser.tags.splice(tag,1);
    this.updateTags();
    setTimeout(() => { 
      this.userService.checkTags();
    }, 750);
  }

}
