import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivateCurrent } from '../server.deactivate';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanDeactivateCurrent {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowedEdit = false;
  isUpdated = false;
  constructor(private serversService: ServersService, private activatedRoute: ActivatedRoute,
    private route: Router) { }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {

    if (!this.allowedEdit) {
      return true;
    }
    if ((this.serverName != this.server.name || this.serverStatus != this.server.status) && !this.isUpdated) {
      return confirm("Are you sure to leave page.. without save.")
    }
    return true;

  }

  ngOnInit() {
    console.log(this.activatedRoute.queryParams)
    console.log(this.activatedRoute.fragment)
    this.activatedRoute.queryParams.subscribe((param: Params) => {
      this.allowedEdit = param['allowEdit'] === '1' ? true : false;
    })
    const id = +this.activatedRoute.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.isUpdated = true;
    this.route.navigate(['../'], { relativeTo: this.activatedRoute });
  }

}
