import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import {MatIconModule} from '@angular/material/icon'
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { FormComponent } from './form/form.component'
import {MatGridListModule} from '@angular/material/grid-list';
import {matDatepickerAnimations, MatDatepickerModule} from '@angular/material/datepicker';
import { MatOptionModule } from '@angular/material/core';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { NavComponent } from './nav/nav.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UpdateFormComponent } from './update-form/update-form.component';
const routes:Routes=[
  {path:'',component:CustomerListComponent},
  {path:'form',component: FormComponent},
  {path:'update',component:UpdateFormComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    FormComponent,
    NavComponent,
    LoadingSpinnerComponent,
    SidebarComponent,
    UpdateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    AngularFireModule.initializeApp(environment.firebase),
   AngularFireDatabaseModule,
   AngularFirestoreModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatGridListModule,
    MatOptionModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatNativeDateModule,
    MatSelectModule
  

  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent],
  //entryComponents:[FormComponent]
})
export class AppModule { }
