import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { userI } from '../models/user.interface'

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private usersCollection: AngularFirestoreCollection<userI>;
  private users: Observable<userI[]>;

  public selectedUser : userI;
  public loggedIn : boolean = false;

  
  mostrarCiencia: boolean = false;
  mostrarCultura: boolean = false;
  mostrarModa: boolean = false;
  mostrarNegocios: boolean = false;

  constructor(db: AngularFirestore) { 
    this.usersCollection = db.collection<userI>('users') //Collección o tabla
    this.users = this.usersCollection.snapshotChanges().pipe(map (
      actions => {
        return actions.map( a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id; //El ID de firebase
          return { id, ... data }; //Data contiene Name y Password o todos los campos de nuestra colección (tabla)
        })
      }
    ))
  }

  checkTags() {
    this.mostrarCiencia = false;
      this.mostrarCultura = false;
      this.mostrarModa = false;
      this.mostrarNegocios = false;
      
      for (let i = 0; i< this.selectedUser.tags.length; i++ )
      {
        if (this.selectedUser.tags[i] == "Ciencia")
          this.mostrarCiencia = true;
        else if (this.selectedUser.tags[i] == "Cultura")
        this.mostrarCultura = true
        else if(this.selectedUser.tags[i] == "Moda")
        this.mostrarModa = true
        else if (this.selectedUser.tags[i] == "Negocios")
        this.mostrarNegocios = true
       
      } 
  }

  getUsers() {
    return this.users;
  }

  getUser(username: string) {    
    return this.usersCollection.doc<userI>(username).valueChanges();    
  }

  addUser(username: string, user: userI) {
    this.usersCollection.doc(username).set(user)
  }

  updateUser(user: userI, username:string) {
    return this.usersCollection.doc(username).update(user);
  }

}
