import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	//property binding
  allowNewServer:boolean = false;
  serverCreationStatus:String = "No servers was creation";
  serverName:string = "Test";
  serverCreated:boolean = false;
  servers = ['TestServer', 'TestServer 2'];

	constructor(){
		setTimeout( () => {
			this.allowNewServer = true;
		}, 2000)
	}

	onCreateServer(){
		this.serverCreated = true;
		this.servers.push(this.serverName);
		this.serverCreationStatus = "Server was created" + this.serverName;
	}
	onUpdateServerName(event: Event){
		//para castearlo, es una propiedad de typescript
		this.serverName = (<HTMLInputElement>event.target).value
	}

  ngOnInit() {
  }

}
