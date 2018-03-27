import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
	styleUrls: ['./server.component.sass']
})
export class ServerComponent implements OnInit {
	serverId = 109092134;
	serverStatus = 'online';

	getServerStatus() {
		return this.serverStatus;
	}


	constructor() { }

	ngOnInit() {

	}

}
