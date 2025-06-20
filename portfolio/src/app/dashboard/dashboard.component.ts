import { Component, OnInit } from '@angular/core';
import { SharedService } from '../common/shared.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

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
  public experiences: any; 
  public education: any;
  public contact = {
    name: '',
    replyto: '',
    message: ''
  }
  constructor(private sharedService: SharedService, private route: Router) {
    this.sharedService.$themeObservable.subscribe(value => {
      if(value != ""){
        this.mode = value;
      }
    });
    this.sharedService.$translatorObservable.subscribe((value: any) =>{
      if(value != null && value != ""){
        this.experiences = value['experience'];
        this.education = value ['education'];
      }
    })
   }

  ngOnInit(): void {
  }

  public applyRouting(){
    window.open('https://www.barclays.in/global-service-centre/btci/', '_blank');    
  }

  public routeToLink(link: string){
    window.open(link, '_blank');
  }

  public sendMail(){
    this.sharedService.sendMail(this.contact).subscribe((response:any) =>{ 
      this.route.navigate(['/submit'])
    })
  }

}
