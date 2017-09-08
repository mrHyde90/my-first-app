import { Component } from '@angular/core';

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ['./server.component.css']
})
export class ServerComponent{
	//string interpolation
	serverId: number = 10;
	serverstatus:String = "offline";

	constructor(){
		this.serverstatus = Math.random() > 0.5 ? "online" : "offline";
	}
	

	getServerStatus(){
		return this.serverstatus;
	}

	getColor(){
		return this.serverstatus === "online" ? "green" : "red";
	}
}
