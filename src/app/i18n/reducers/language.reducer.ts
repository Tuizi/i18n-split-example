import { Language } from '../models/language.model';
import { createReducer, on } from '@ngrx/store';
import { LanguageActions } from '../actions';

export const languageFeatureKey = 'language';

export interface State {
  current: Language;
}

export function navigatorLanguage(): string {
  const lang: string = window.navigator.language.toLowerCase().split('-')[0];
  let result = 'en';
  switch (lang) {
    case 'fr':
    case 'en':
    case 'it':
    case 'es':
      result = lang;
      break;
    default:
      break;
  }
  return result;
}

export const initialState: State = {
  current: navigatorLanguage() as Language
};

export const reducer = createReducer(
  initialState,
  on(LanguageActions.set, (state, { language }) => ({
    ...state,
    current: language
  }))
);

export const getLanguage = (state: State) => state.current;
