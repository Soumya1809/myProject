import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SharedService } from './common/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  public items: MenuItem[] = [
    {
      icon: 'pi pi-linkedin',
      url: 'https://www.linkedin.com/in/soumyakannan/'
    },
    {
      icon: 'pi pi-github',
      url: 'https://github.com/Soumya1809'
    },
    {
      icon: 'pi pi-envelope',
      url: 'mailto:soumyshreya@gmail.com'
    },
    {
      icon: 'pi pi-whatsapp',
      url: 'https://wa.me/+4915756434149 '
    },
    {
      icon: 'pi pi-id-card',
      command: () => {
        this.downloadResume()
      }
    }
  ];

  public appLanguage = '';
  constructor(private sharedService: SharedService){
    this.sharedService.$languageObservable.subscribe(value => {
      if(value != ""){
        this.appLanguage = value;
      }
    })
  }

  private downloadResume(){
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = this.appLanguage === 'de' ? '/assets/data/Lebenslauf_SoumyaKannan.pdf' : '/assets/data/CV_SoumyaKannan.pdf';
    link.download = this.appLanguage === 'de' ? 'Lebenslauf_SoumyaKannan.pdf' : 'CV_SoumyaKannan.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
