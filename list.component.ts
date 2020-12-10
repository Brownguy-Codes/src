import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  arr: any[]=[];

  showjson() {
    var arr = [];
    for (var i = 0; i < localStorage.length; i++) {
      arr.push(localStorage.key(i));
    }
    this.arr = arr;

    //document.getElementById("demo").innerHTML = arr;
  }



  constructor() {}

  ngOnInit(): void {
    this.showjson();
  }

}
