import {CharacterActions} from '../actions/index';
import {CharactersState} from "../product-state";

export const initialState: CharactersState = {
    results: [],
    error: ''
};

export function reducer(
    state = initialState,
    action: CharacterActions.CharacterAction
): CharactersState {
    switch (action.type) {
        case CharacterActions.SEARCH_SUCCESS: {
            return {
                ...state,
                error: '',
                results: action.payload.results
            }
        }

        case CharacterActions.SEARCH_FAIL: {
            return {
                ...state,
                error: action.payload.error,
                results: []
            }
        }
    }

    return state;
}
