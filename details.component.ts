import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  arr: any[]=[];

  showjson() {
    var arr = [];
    for (var i = 0; i < localStorage.length; i++) {
      arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    this.arr = arr;
    //document.getElementById("demo").innerHTML = arr;
  }



  constructor() {}

  ngOnInit(): void {
    this.showjson();
  }

}
