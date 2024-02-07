import { Component } from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
   userName:string='';
   userAge:string="";
   userEmail:string="";
   userPass:string="";
   showLable:boolean=false;
   showLableAge:boolean=false;
   showLableEmail:boolean=false;
   showLablepass:boolean=false;
  
   showlabelName():void{
    if(this.userName.length==0){
      this.showLable=false;
    }else{
    this.showLable= true;
        
    }
   }
   showlabelAge():void{
    if(this.userAge.length==0){
      this.showLableAge=false;
    }else{
    this.showLableAge= true;
       
    }
   }
   showlabelEmail():void{
    if(this.userEmail.length==0){
     this.showLableEmail= false;
    }else{
    this.showLableEmail= true;
          
    }
   }
   showlabelPass():void{
    if(this.userPass.length==0){
    this.showLablepass= false;

    }else{ 
    this.showLablepass= true;

    }
   }
}
