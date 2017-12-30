import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  allowUserName = false;
  serverCreationStatus = 'No server was created!';
  serverName ='Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  // assignment 2
  // userName = '';
  secretCode = false;
  myArray = [];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
    
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onToggleSecret() {
    this.secretCode = !this.secretCode;
    // this.myArray.push(this.myArray.length + 1);
    this.myArray.push(new Date());
  }

}
