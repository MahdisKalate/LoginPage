import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, UrlSerializer, ParamMap } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  number:any;
  password:any;

  constructor(
    private route: ActivatedRoute,
    private router:Router
    )
    {
      console.log(router.url);
    }

  ngOnInit(): void {
    this.number = this.route.snapshot.paramMap.get('phonenumber');
  }

}
