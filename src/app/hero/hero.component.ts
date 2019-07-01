import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  username = "";
  constructor(private route:ActivatedRoute) { 
    console.log(route.snapshot);
    console.log('id',route.snapshot.params['id']); 
    console.log('title',route.snapshot.data['title']); 
  }

  ngOnInit() {
  }



  getName = (name) => {
    console.log(name);
  }

  getUserName(){
    console.log(this.username);
  }


}
