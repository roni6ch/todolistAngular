import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() dataFromParent = "";
  @Output() data = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
    console.log('HeaderComponent ngOnInit');
  }

  sendData(){
    this.data.emit("bla bla");
  }

}
