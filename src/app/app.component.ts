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

  ngAfterViewInit(){
    console.log("Respond after Angular initializes the component's views and child views / the view that a directive is in.");
  }

  printData(data){
    this.data = data;
    console.log(data + " from parent");
  }

  sendDataToChild(){
    this.dataFromParentText = "hello";
  }
  
}
