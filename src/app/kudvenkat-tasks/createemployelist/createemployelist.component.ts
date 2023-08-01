import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { departemnt } from 'src/app/models/department.model';
@Component({
  selector: 'app-createemployelist',
  templateUrl: './createemployelist.component.html',
  styleUrls: ['./createemployelist.component.css']
})

export class CreateemployelistComponent {
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
  isActive:any;
  department:any;
  dateOfBirth:any;
  

  saveEmployee(empForm:NgForm):void{
     console.log(empForm.value);
     console.log("vamsi");
  }
}
