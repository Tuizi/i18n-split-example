import { OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Language } from '../models/language.model';
import * as fromI18n from '../reducers';

export class I18nComponent implements OnInit {
  currentLanguage$: Observable<Language>;
  translate: TranslateService;

  constructor(store: Store<fromI18n.State>, translate: TranslateService) {
    this.translate = translate;
    this.currentLanguage$ = store.pipe(select(fromI18n.getCurrentLanguage));

    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.currentLanguage$.subscribe(language => this.translate.use(language));
  }
}
