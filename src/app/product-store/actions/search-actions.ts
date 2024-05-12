import { Action } from '@ngrx/store';
import {Character} from "../product-state";

export const SEARCH_CHARACTERS = '[Characters] Search';
export const SEARCH_SUCCESS = '[Characters] Search Success'
export const SEARCH_FAIL = '[Characters] Search Fail'

export class SearchCharacters implements Action {
  readonly type = SEARCH_CHARACTERS;
}

export class SearchCharactersSuccess implements Action {
  readonly type = SEARCH_SUCCESS;
  constructor(public payload: { results: Character[]}) {}
}

export class SearchCharactersFailure implements Action {
  readonly type = SEARCH_FAIL;
  constructor(public payload: { error:string }) {}
}

export type CharacterAction =
  | SearchCharacters
  | SearchCharactersSuccess
  | SearchCharactersFailure;
