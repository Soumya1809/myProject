import { Component, OnInit } from '@angular/core';
import { SharedService } from '../common/shared.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public mode = 'light';
  public isOpen = false;
  public countries = [
    {src: '/assets/images/germany.png', name: 'DE'},
    {src: '/assets/images/united-kingdom.png', name: 'EN'}
  ];
  public selectedCountry = this.countries[1];
  
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.switchLanguage(this.selectedCountry.name.toLowerCase());    
    this.setTheme();
  }

  public switchModes(){
    this.mode = this.mode === 'dark' ? 'light' : 'dark';
    this.setTheme();
  }

  private setTheme(){    
    document.body.setAttribute('data-theme', this.mode);
    this.sharedService.$themeSwitcher.next(this.mode);
  }

  public selectCountry(country: any){
    this.selectedCountry = country;
    this.isOpen = false;
    this.sharedService.switchLanguage(this.selectedCountry.name.toLowerCase());
    this.sharedService.$languageSwitcher.next(this.selectedCountry.name.toLowerCase())
  }

  public routeToLink(){
    window.open('https://www.linkedin.com/in/soumyakannan/', '_blank');
  }

}