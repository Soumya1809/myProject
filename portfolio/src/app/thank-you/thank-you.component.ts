import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../common/shared.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  public mode = 'light';
  constructor(private route: Router, private sharedService: SharedService) {
    this.sharedService.$themeObservable.subscribe(value => {
      if (value != "") {
        this.mode = value;
      }
    });
  }

  ngOnInit(): void {
  }

  public backToHome() {
    this.route.navigate([''])
  }

}
