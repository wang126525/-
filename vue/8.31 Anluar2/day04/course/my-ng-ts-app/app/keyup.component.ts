import { Component } from '@angular/core';
@Component({
  selector: 'key-up1',
  templateUrl: "./app/keyup.html"
})
export class KeyUPComponent { 
  values = "";
  onKey(ev:any){
    console.log(ev.target.value);
    this.values = ev.target.value;
  }
}