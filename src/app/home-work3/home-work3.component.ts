import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-work3',
  templateUrl: './home-work3.component.html',
  styleUrls: ['./home-work3.component.css']
})
export class HomeWork3Component implements OnInit {
displayButton:boolean = true;
countClicks:number = 0;
countArrays = [0];

onDisplayButton(){
	this.displayButton = !this.displayButton;
	this.countClicks = this.countClicks + 1;
	this.countArrays.push(this.countClicks);
}

onDisplayColor(){
	return this.countClicks >= 4 ? "blue" : "white";
}
  constructor() { }

  ngOnInit() {
  }

}
