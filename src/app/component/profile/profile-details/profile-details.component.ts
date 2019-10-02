import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataShareService } from '../../../Serivice/data-share.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  error;
  constructor(private route: ActivatedRoute, private service: DataShareService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    this.service.getPosts(id).subscribe(data => {
      this.error = '';
      console.log(data)
    }, err => {
      this.error = err;
    })
  }

}
