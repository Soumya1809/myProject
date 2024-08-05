import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public routeToLink(){
    // let link = document.createElement('a');
    // link.setAttribute('type', 'hidden');
    // link.href = '/assets/data/Soumya K CV.pdf';
    // link.download = 'Soumya K CV.pdf';
    // document.body.appendChild(link);
    // link.click();
    // link.remove();
    window.open('https://www.linkedin.com/in/soumyakannan/', '_blank');
  }

}
