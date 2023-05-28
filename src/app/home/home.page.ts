import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public n!:number;
  public showNumber!:string;

  constructor() {
    this.n = 0;
    this.showNumber = '00';
  }

  up(){

    this.n +=1;

    if (this.n <10) {
        this.showNumber = '0' + this.n.toString();
    }else{
      this.showNumber = this.n.toString();
    }
  }

  down(){
    this.n -= 1;
    if (this.n > 9) {
      this.showNumber = this.n.toString();
    }else{
      this.showNumber = '0' +  this.n.toString();
    }
  }
}
