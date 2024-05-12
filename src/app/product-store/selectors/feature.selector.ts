import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import {
  CharactersState,
  CHARCTER_SEARCH_FEATURE,
  StateWithCharacters,
} from '../product-state';

export const getCharacterState: MemoizedSelector<
  StateWithCharacters,
  CharactersState
> = createFeatureSelector<CharactersState>(CHARCTER_SEARCH_FEATURE);
