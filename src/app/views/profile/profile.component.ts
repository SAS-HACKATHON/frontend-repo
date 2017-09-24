import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PushNotificationsService } from 'angular2-notifications';
import { UserInfoService } from 'app/services/user-info.service';

@Component({
  templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {

  userID: number;
  userIDO: string;
  private sub: any;

  userInfo: string;

  constructor(
    private pushNotificationsService: PushNotificationsService ,
    private router: Router,
    private route: ActivatedRoute,
    private userInfoService: UserInfoService
  ) {
    this.userID = 7;
  }
  ngOnInit(): void {

    this.userInfo='JSON info => '+ this.userInfoService.getUserInfo();

    this.pushNotificationsService.requestPermission();

    this.pushNotificationsService.create('Test', {body: 'something11'}).subscribe(
      res => console.log(res),
      err => console.log(err)
  )

    this.sub = this.route.params.subscribe(params => {
      this.userIDO = params['id'];
    });

    if(!this.userIDO){this.userIDO = '7';}
    if (!isNaN(+this.userIDO) && +this.userIDO) {
      this.userID = +this.userIDO;
    }
    else {
      console.log('redirect to 404 later');
      this.router.navigateByUrl('/pages/404');
    }
  }

}
