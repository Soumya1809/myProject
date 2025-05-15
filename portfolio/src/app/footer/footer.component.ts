import { Component, OnInit } from '@angular/core';
import { SharedService } from '../common/shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public itemLists = [
    {icon: '/assets/images/linkedin.svg', link: 'https://www.linkedin.com/in/soumyakannan/', text: 'LinkedIn'},
    {icon: '/assets/images/gmail.svg', link: 'mailto:soumyshreya@gmail.com', text: 'Gmail'},
    {icon: '/assets/images/whatsapp.svg', link: 'https://wa.me/+4915756434149', text: 'WhatsApp'},
    {icon: '/assets/images/instagram.svg', link: 'https://www.instagram.com/_soumya_kannan_/', text: 'Instagram'},
    {icon: '/assets/images/github-sign.svg', link: 'https://github.com/Soumya1809', text: 'Github'},
    {icon: '/assets/images/cv.svg', link: 'downloadResume', text: 'CV'}
  ]
  public mode = 'light';
  public appLanguage = '';
  constructor(private sharedService: SharedService){
    this.sharedService.$languageObservable.subscribe(value => {
      if(value != ""){
        this.appLanguage = value;
      }
    });
     this.sharedService.$themeObservable.subscribe(value => {
      if (value != "") {
        this.mode = value;
      }
    });
  }

  ngOnInit(): void {
  }

  public onLinkSelection(link: string){
    if(link == 'downloadResume'){
      this.downloadResume();
    }
    else{
      window.open(link, '_blank');
    }
  }

  private downloadResume(){
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = this.appLanguage === 'de' ? '/assets/data/Soumya_Kannan_Lebenslauf.pdf' : '/assets/data/Soumya_Kannan_Curriculum_Vitae.pdf';
    link.download = this.appLanguage === 'de' ? 'Soumya_Kannan_Lebenslauf.pdf' : 'Soumya_Kannan_Curriculum_Vitae.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
