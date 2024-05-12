import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Character} from "../product-store/product-state";
import {Observable, tap} from "rxjs";
import {SearchServiceService} from "../shared/service/search-service.service";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class CharacterDetailResolver implements Resolve<Character>{

    constructor(protected searchService:SearchServiceService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any{
        return this.searchService.getCharacter(route.paramMap.get('id')).pipe(tap(r => console.log('resolver',r)));
    }

}