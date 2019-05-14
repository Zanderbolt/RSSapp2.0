import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { tagsI } from '../models/tags.interface';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  private tagsCollection: AngularFirestoreCollection<tagsI>;
  private tags: Observable<tagsI[]>;

  // public selectedTag : tagsI;
  // public loggedIn : boolean = false; 


  constructor(db: AngularFirestore) { 
    this.tagsCollection = db.collection<tagsI>('tags') //Collección o tabla
    this.tags = this.tagsCollection.snapshotChanges().pipe(map (
      actions => {
        return actions.map( a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id; //El ID de firebase
          return { id, ... data }; //Data contiene Name y Password o todos los campos de nuestra colección (tabla)
        })
      }
    ))
  }

  getTags() {
    return this.tags;
  }

  getTag(username: string) {
    return this.tagsCollection.doc<tagsI>(username).valueChanges();
  }

  // addUser(username: string, user: tagsI) {
  //   this.tagsCollection.doc(username).set(user)
  // }


}
