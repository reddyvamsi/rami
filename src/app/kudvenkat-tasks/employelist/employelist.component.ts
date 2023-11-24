import { Component } from '@angular/core';
import {Employee} from '../../models/emp.model'

@Component({
  selector: 'app-employelist',
  templateUrl: './employelist.component.html',
  styleUrls: ['./employelist.component.css']
})
export class EmployelistComponent {
 name:string="vamsikrishna";
  emp:Employee[]=[
    {
      id:1,
    name:"vamsi krishna",
    gender:"male",
    email:"vamsikrishna@gmail.com",
    phonenumber:"9866164308",
    dateOfBirth:new Date('05/10/1995'),
    department:'IT',
    isActive:true,
    imagepath:'assets/images/emp1.png'
    },
    {
      id:2,
    name:"krishna",
    gender:"male",
    email:"krishna@gmail.com",
    phonenumber:"9866164308",
    dateOfBirth:new Date('05/10/1999'),
    department:'IT',
    isActive:true,
    imagepath:'assets/images/john.png'
    },
    {
      id:2,
    name:"vasu",
    gender:"female",
    email:"vasu@gamil.com",
    phonenumber:"9866163454",
    dateOfBirth:new Date('05/12/1985'),
    department:'IT',
    isActive:true,
    imagepath:'assets/images/mary.png'
    }
  ];
}
