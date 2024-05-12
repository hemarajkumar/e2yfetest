import {createSelector, MemoizedSelector} from '@ngrx/store';
import {getCharacterState} from './feature.selector';
import {Character, CharactersState, StateWithCharacters} from "../product-state";

export const getCharacterResults: MemoizedSelector<StateWithCharacters, Character[] | undefined> = createSelector(
  getCharacterState,
  (state: CharactersState) => state?.results
);

export const getSearchError:MemoizedSelector<StateWithCharacters, string | undefined>=createSelector(
    getCharacterState,
    state => state?.error
)

export const getCharaterData = (
  id: string | null
) => {
  return createSelector(
      getCharacterState,
      (state: CharactersState) => state?.results?.find(character => character?.id === id)
  );
};