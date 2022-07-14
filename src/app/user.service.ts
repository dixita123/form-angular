import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreCollectionGroup,AngularFirestoreDocument } from '@angular/fire/compat/firestore';

import { User } from './model/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  

  usersCollection!: AngularFirestoreCollection<User>
  userCollection!:Observable<any>;


  items: Observable<User[]>;
  itemDoc!:AngularFirestoreDocument<User>
  constructor(
    public afs:AngularFirestore,
  ) { 
    
    
    this.usersCollection=this.afs.collection('users');
    this.items=this.afs.collection('users').snapshotChanges().pipe(
      map((changes: any[])=>{
        return changes.map(a=>{
          const data=a.payload.doc.data() as User;
          data.id=a.payload.doc.id;
          return data;
        })
  }));
  
  }
  getItems(){
    return this.items.pipe(catchError(this.handleError));
    
  }

  handleError(error:any){
    console.log(error+"this is my error");
    
    return throwError(error.message||"Something went wrong");
  }

  addItem(user:any){
   

   

   
    try{
     
      this.usersCollection.add(user);
    }
    catch(error){
      alert(error)
    }
  }
  deleteItem(user:any){
      try{
        this.itemDoc=this.afs.doc(`users/${user.id}`);
      this.itemDoc.delete();
      }
      catch(error){
        alert(error);
      }
  }
  
  updateItem(user:any){
    try{
      console.log(user);
      
      
      this.itemDoc=this.afs.doc(`users/${user.id}`);
      this.itemDoc.update(user)
    }
     catch(error){
       alert(error);
    }
  }
}
