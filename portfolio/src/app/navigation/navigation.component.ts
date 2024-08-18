import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public mode = 'dark';
  public isOpen = false;
  public countries = [
    {src: '/assets/images/germany.png', name: 'DE'},
    {src: '/assets/images/united-kingdom.png', name: 'EN'}
  ];
  public selectedCountry = this.countries[1];
  constructor() { }

  ngOnInit(): void {
  }

  public switchModes(){
    this.mode = this.mode === 'dark' ? 'light' : 'dark';
  }

  public selectCountry(country: any){
    this.selectedCountry = country;
    this.isOpen = false;
  }
  public routeToLink(){
    window.open('https://www.linkedin.com/in/soumyakannan/', '_blank');
  }

}
