import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Character, StateWithCharacters} from "../../product-store/product-state";
import {select, Store} from "@ngrx/store";
import {SearchCharacters} from "../../product-store/actions/search-actions";
import {getCharacterResults, getCharaterData} from "../../product-store/selectors/characters-selectors";

@Injectable({
  providedIn: 'root'
})

export class SearchServiceService {

  constructor( protected store:Store<StateWithCharacters>) {}

  search(){
    this.store.dispatch(new SearchCharacters());
  }

  getResults():Observable<Character[] | undefined>{
    return this.store.pipe(select(getCharacterResults));
  }

  getCharacter(id: string | null):Observable<any>{
    console.log(id);
    return this.store.pipe(select(getCharaterData(id)));
  }

}
