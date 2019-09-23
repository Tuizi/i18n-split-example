import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { I18nComponent } from './i18n/container/i18n.component';
import * as fromI18n from './i18n/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends I18nComponent {
  constructor(
    readonly store: Store<fromI18n.State>,
    readonly translate: TranslateService
  ) {
    super(store, translate);
  }
}
