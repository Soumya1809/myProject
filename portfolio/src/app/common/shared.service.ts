import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private translateService: TranslateService) { }
  
  public $languageSwitcher = new BehaviorSubject("");
  public $languageObservable = this.$languageSwitcher.asObservable();
  
  public $themeSwitcher = new BehaviorSubject("");
  public $themeObservable = this.$themeSwitcher.asObservable();

  public switchLanguage(language: string){
    this.translateService.use(language);
  }

}
