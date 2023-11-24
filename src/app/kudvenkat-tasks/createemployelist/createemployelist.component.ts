import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { departemnt } from 'src/app/models/department.model';
import { Employee } from 'src/app/models/emp.model';

@Component({
  selector: 'app-createemployelist',
  templateUrl: './createemployelist.component.html',
  styleUrls: ['./createemployelist.component.css']
})

export class CreateemployelistComponent {
datepickerConfig:Partial<BsDatepickerConfig>;

// model binding template driven forms
employee:Employee={
   id:null,
    name: null,
    gender:null,
    email:null,
    phonenumber:null,
    dateOfBirth:null,
    department:null,
    isActive:null,
    imagepath:null
}


  previewimage=false;

  Department:departemnt[]=[
    {id:1,name:'Help desk'},
    {id:2,name:'Hr'},
    {id:3,name:'software'},
    {id:4,name:'admin'},
    {id:5,name:'accounts'},
  ]

  fullname:string="";
  email:string="";
  gender:any="";
  isActive:boolean=false;
  department:any;
  dateOfBirth:any;
  imagepath:any;

   constructor(){
    // angular date picker form angular meterial
    this.datepickerConfig=Object.assign({},
       {
        containerClass:'theme-dark-blue',
        showWeekNumbers:false,
        dateInputFormat:'DD/MM/YYYY'
      });
   }

  saveEmployee(empForm:NgForm):void{
     console.log(empForm.value);
     console.log("vamsi");
  }

  toggleimage(){
    this.previewimage=!this.previewimage;
  }
}
