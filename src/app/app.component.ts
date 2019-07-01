import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dataFromParentText="";
  data;

  ngOnInit(){

    console.log("ngOnInit app");
  }
  ngAfterViewInit(){
    console.log("Respond after app");
  }

  printData(data){
    this.data = data;
    console.log(data + " from parent");
  }

  sendDataToChild(){
    this.dataFromParentText = "hello";
  }
  
}
