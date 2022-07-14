import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  user!:User;
  editState!:boolean;
  itemToEdit:any;
  
  constructor() { }
  updateRoute(user:User){
     
    this.user=user;
     
      this.editState=true;
      this.itemToEdit=user;
  }
}
