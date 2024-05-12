import {InjectionToken, Provider} from '@angular/core';
import * as fromGlobalMessage from './search-reducers';
import {ActionReducer} from '@ngrx/store';
import {CharactersState} from "../product-state";
import {CharacterAction} from "../actions/search-actions";

export function getReducers(): ActionReducer<CharactersState,CharacterAction> {
  return fromGlobalMessage.reducer;
}

export const reducerToken: InjectionToken<
  ActionReducer<CharactersState,CharacterAction>
> = new InjectionToken<ActionReducer<CharactersState,CharacterAction>>(
  'CharactersReducers'
);

export const reducerProvider: Provider = {
  provide: reducerToken,
  useFactory: getReducers,
};
