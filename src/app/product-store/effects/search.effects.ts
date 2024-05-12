import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap} from "rxjs";
import {SEARCH_CHARACTERS, SearchCharactersFailure, SearchCharactersSuccess} from "../actions/search-actions";
import {HttpClient} from "@angular/common/http";
import {Character} from "../product-state";
import {ENDPOINT_URL} from "../../shared/constants";

@Injectable()
export class SearchEffects {

    getSearchResult$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SEARCH_CHARACTERS),
            switchMap(_ => {
                return this.http.get<Character[]>(ENDPOINT_URL).pipe(
                    switchMap((results) => of(new SearchCharactersSuccess({results}))),
                    catchError((error: { message: any }) =>
                        of(new SearchCharactersFailure( {error: error.message }))
                    )
                );
            })
        )
    );

    constructor(private actions$: Actions, protected http: HttpClient) {}
}