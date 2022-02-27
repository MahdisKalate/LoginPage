import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second-screen',
  templateUrl: './second-screen.component.html',
  styleUrls: ['./second-screen.component.css']
})
export class SecondScreenComponent implements OnInit {

  user: { phonenumber: number, password: string };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(){
    this.user = {
      phonenumber : this.route.snapshot.params['phonenumber'],
      password : this.route.snapshot.params['password']
    }
  }

}
