import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router , UrlSerializer, ParamMap, Routes } from '@angular/router';
import { MyServiceService } from './../shared/services/my-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:any;
  id: any;

  constructor(
    private myservice:MyServiceService,
    private route:ActivatedRoute
    ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    
     this.myservice.getOneApi(this.id)
      .subscribe((info) => {
         this.profile=info;
         console.log(this.profile);
      })
    }

}
