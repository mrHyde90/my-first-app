import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-work2',
  templateUrl: './home-work2.component.html',
  styleUrls: ['./home-work2.component.css']
})
export class HomeWork2Component implements OnInit {
username:String = "";
permit:boolean = true;

onCheckButton(){
	if(this.username){
		this.permit = false;
	} else{
		this.permit = true;
	}
}

onReset(){
	this.username = "";
	this.permit = true;
}
  constructor() { }

  ngOnInit() {
  }

}
