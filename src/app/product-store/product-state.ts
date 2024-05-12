export interface Character{
    id: string,
    name:  string,
    dateOfBirth: string,
    hogwartsStudent: string | boolean,
    hogwartsStaff: string | boolean,
    image: string,
    alive: boolean
}

export const CHARCTER_SEARCH_FEATURE = 'character-search';

export interface StateWithCharacters {
    [CHARCTER_SEARCH_FEATURE]: CharactersState;
}

export interface CharactersState {
    results?: Character[];
    error?:string;
}

