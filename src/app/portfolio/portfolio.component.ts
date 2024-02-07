import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
    src1:string="assets/images/poert1.png";
    src2:string="assets/images/port2.png";
    src3:string="assets/images/port3.png";

    imgsources:string[]=[this.src1,this.src2,this.src3,this.src1,this.src2,this.src3];

    show:boolean=false;
imgPopup:string="";
    openPopup(imgSrc:string){
      this.show=true;
      this.imgPopup=imgSrc;
    }
    closePopup(){
      this.show=false;
    }
}
