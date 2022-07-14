import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../form.service';
import { countries } from '../model/countries';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
  user:any={
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
    mobile:'',
    country:'',
    dob:''
  };
  u!:User[];
  error='';
  public countries:any = countries;
  // contactForm = new FormGroup({
  //   firstname: new FormControl('', Validators.required),
  //   lastname: new FormControl('', Validators.required),
  //   email: new FormControl('', Validators.required),
  //   phone: new FormControl('', Validators.required),
  //   mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
  //   country: new FormControl('',Validators.required),
  //   dob:new FormControl('', Validators.required)
  // })
  contactForm = new FormGroup({
    firstname: new FormControl(this.user.firstname, Validators.required),
    lastname: new FormControl(this.user.lastname, Validators.required),
    email: new FormControl(this.user.email, Validators.required),
    phone: new FormControl(this.user.phone, Validators.required),
    mobile: new FormControl(this.user.mobile, [Validators.required, Validators.minLength(8)]),
    country: new FormControl(this.user.country,Validators.required),
    dob:new FormControl(this.user.dob, Validators.required)
  });


  constructor(private userService:UserService,
    private router:Router,
    private formService:FormService) { 
      this.user=this.formService.user;
      console.log(this.user);
      
    }

  ngOnInit(): void {
    this.user=this.formService.user;
    console.log(this.user);
    this.userService.getItems().subscribe(users=>{
      this.u=users;
      
     
      
    },(error)=>{
      console.log(error);
      this.error=error;
      
    });
    
    
  }
  itemEdit=this.formService.itemToEdit;
  onSubmit(m:any){

    this.userService.updateItem(m);
   
       this.contactForm.reset();
       alert("User updated Successfully!!!");
       this.router.navigate(['/']);
  }
  onClear(){
    this.contactForm.reset();
   
  }
  


}
