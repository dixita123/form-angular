import { Component, Directive, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service'; 
import {MatTableDataSource} from '@angular/material/table'; 
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
//import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { countries } from '../model/countries';
import { FormService } from '../form.service';
@Injectable({
  providedIn: 'root'
})
@Directive({
  selector: '[matRowDef]'
}) export class StubMatRowDefDirective {
  @Input() matRowDefColumns!: string[];
}
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  public countries:any = countries;
  isLoading=true;
  @Output() myOutput:EventEmitter<string>= new EventEmitter(); 
  outputForm:any={};
  users:User[]=[];
  error:string='';
  editState!:boolean;
  itemToEdit:any;
  dataSource!: MatTableDataSource<any>;
  searchKey!:string;
  @ViewChild(MatSort) sort!:MatSort;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  constructor( private userService:UserService,
    //private dialog:MatDialog,
     private formService:FormService,
     private router:Router) { }

  ngOnInit(): void {
    this.userService.getItems().subscribe(users=>{
      
      console.log(users);
      this.users=users;
      this.dataSource=new MatTableDataSource(users);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
      this.isLoading=false;
      
    },(error)=>{
      console.log(error);
      this.error=error;
      
    });
    //this.dataSource=new MatTableDataSource(this.users);
  }
  displayedColumns: string[] = ['firstname','lastname','email','mobile','actions'];
  
  onCreate() {
  
    this.router.navigate(['/form']);
  }

  // onEdit(row:any){
  //    //this.userService.updateItem(row);
  //    const dialogConfig = new MatDialogConfig();
  //    dialogConfig.disableClose = true;
  //    dialogConfig.autoFocus = true;
  //    dialogConfig.width = "60%";
  //    this.dialog.open(FormComponent,dialogConfig);
  // }

  delete(event:any,user:User){
    if(confirm('Are you sure to delete this record ?')){
    this.userService.deleteItem(user);
    alert('! Deleted successfully');
    }
  }
  update(event:any,user:User){
   this.formService.updateRoute(user);

   this.editState=true;
   this.itemToEdit=user;
   this.router.navigate(['/update'])
   
   
  }

}


