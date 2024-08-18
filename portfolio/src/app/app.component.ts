import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

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
      url: 'https://wa.me/9952013066'
    },
    {
      icon: 'pi pi-id-card',
      command: () => {
        this.downloadResume()
      }
    }
  ];

  private downloadResume(){
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = '/assets/data/Soumya K CV.pdf';
    link.download = 'Soumya K CV.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
