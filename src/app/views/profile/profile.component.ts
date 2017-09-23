import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {

  userID: number;
  userIDO: string;
  private sub: any;

  constructor(private route: ActivatedRoute) {
    this.userID = 7;
  }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.userIDO = params['id'];
    });
    if (!isNaN(+this.userIDO)) {
      this.userID += +this.userIDO;
    }
  }

}
