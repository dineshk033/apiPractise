import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../../Serivice/data-share.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile;
  error;
  constructor(private service: DataShareService) { }
  ngOnInit() {
    this.service.getProfile().subscribe(arg => this.profile = arg, err => {
      this.profile = [];
      this.error = err;
    })
  }

}
