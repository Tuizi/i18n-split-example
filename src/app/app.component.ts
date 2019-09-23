import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import * as fromI18n from './i18n/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  currentLanguage$ = this.store.pipe(select(fromI18n.getCurrentLanguage));

  constructor(
    private store: Store<fromI18n.State>,
    private readonly translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.currentLanguage$.subscribe(language => this.translate.use(language));
  }
}
