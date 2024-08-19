import { Component, OnInit } from '@angular/core';
import { SharedService } from '../common/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public mode = 'light';
  public skillSet = [
    {title: 'HTML', imageSrc: '/assets/images/html.png', class: 'shadow-orange-500'},
    {title: 'CSS', imageSrc: '/assets/images/css.png', class: 'shadow-blue-500'},
    {title: 'Javascript', imageSrc: '/assets/images/javascript.png', class: 'shadow-yellow-500'},
    {title: 'Angular', imageSrc: '/assets/images/angular.png', class: 'shadow-red-500'},
    {title: 'Tailwind', imageSrc: '/assets/images/tailwind.png', class: 'shadow-sky-400'},
    {title: 'Ngrx', imageSrc: '/assets/images/ngrx.png', class: 'shadow-purple-500'},
    {title: 'Karma', imageSrc: '/assets/images/karma.png', class: 'shadow-teal-500'},
    {title: 'Github', imageSrc: '/assets/images/github.png', class: 'shadow-gray-500'},
    {title: 'Sql', imageSrc: '/assets/images/sql.png', class: 'shadow-lime-400'}    
  ];  
  constructor(private sharedService: SharedService) {
    this.sharedService.$languageObservable.subscribe(value => {
      if(value != ""){
        this.sharedService.switchLanguage(value);
      }
    });
    this.sharedService.$themeObservable.subscribe(value => {
      if(value != ""){
        this.mode = value;
      }
    })
   }

  ngOnInit(): void {
  }

  public applyRouting(){
    window.open('https://www.barclays.in/global-service-centre/btci/', '_blank');    
  }

}
