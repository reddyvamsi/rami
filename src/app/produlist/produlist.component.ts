import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-produlist',
  templateUrl: './produlist.component.html',
  styleUrls: ['./produlist.component.css']
})


export class ProdulistComponent {
  // property for search tile
  searchtext:any=""
  // filter elemnts
  filteredproducts:any=[];
  //all elemensta
  allproducts:any=[];

 constructor(private http:HttpClient){}

 ngOnInit():void{
    this.http.get("https://fakestoreapi.com/products").subscribe(
      (res)=>{
        this.filteredproducts=res
           this.allproducts=res
           console.log(this.allproducts)
      })
 }


 filterdata=()=>{
  this.filteredproducts=this.allproducts.filter(
    (item:any)=>{
    return item.title.toLowerCase().includes(this.searchtext.toLowerCase())
  })
 }
}
