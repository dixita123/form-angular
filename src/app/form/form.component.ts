import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';
import { countries } from '../model/countries';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { FormService } from '../form.service';
@Component({

  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  public countries:any = countries;
  contactForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    country: new FormControl('',Validators.required),
    dob:new FormControl('', Validators.required)
  })


  constructor(private userService:UserService,
    private router:Router,
    private formService:FormService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.userService.addItem(this.contactForm.value);
   
       this.contactForm.reset();
       alert("User created Successfully!!!");
       this.router.navigate(['/']);
  }
  onClear(){
    this.contactForm.reset();
  }




}
