import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private translateService: TranslateService, private http: HttpClient) { }
  
  public $languageSwitcher = new BehaviorSubject("");
  public $languageObservable = this.$languageSwitcher.asObservable();
  
  public $themeSwitcher = new BehaviorSubject("");
  public $themeObservable = this.$themeSwitcher.asObservable();

  public $translator = new BehaviorSubject("");
  public $translatorObservable = this.$translator.asObservable();

  public switchLanguage(language: string){
    this.translateService.use(language);
    this.translateService.get('academic').subscribe(res => {
      this.$translator.next(res)
    })
  }

  public sendMail(content: any){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('https://getform.io/f/aqokglma',content, {'headers': headers, responseType: 'text'});
  }
}