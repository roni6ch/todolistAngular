import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Person } from  '../person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public submitted = false;
  public p1;
  constructor() { 
  }

  ngOnInit() {
    this.p1 =  new Person('', '');
  }
  onSubmit() { this.submitted = true; console.log(this.p1);  }

}
