import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService, private route: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.data.subscribe((data:Data)=>{
      this.server=data['server'];
    })
    // let id = +this.activateRoute.snapshot.params['id'];
    // this.activateRoute.params.subscribe((param: Params) => {
    //   id = +param['id'];
    // })
    // this.server = this.serversService.getServer(id);
  }
  onEdit() {
    this.route.navigate(['edit'], { relativeTo: this.activateRoute,queryParamsHandling:'preserve' });
  }
}
