import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { AppTest } from "./app.test";
import { KeyUPComponent} from "./keyup.component"
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,AppTest,KeyUPComponent ],
  bootstrap:    [ AppComponent,AppTest,KeyUPComponent ]
  
})
export class AppModule { }