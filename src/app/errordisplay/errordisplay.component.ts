import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-errordisplay',
  templateUrl: './errordisplay.component.html',
  styleUrls: ['./errordisplay.component.css']
})
export class ErrordisplayComponent implements OnInit {
  message: string;
  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.data.subscribe((data: Data) => {
      this.message = data['message']
    })
  }

}
