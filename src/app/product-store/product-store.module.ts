import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {CHARCTER_SEARCH_FEATURE} from "./product-state";
import {reducerProvider, reducerToken} from "./reducers";
import {SearchEffects} from "./effects/search.effects";



@NgModule({
  declarations: [],
  providers:[
    reducerProvider
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(CHARCTER_SEARCH_FEATURE,reducerToken),
    EffectsModule.forFeature(SearchEffects)
  ]
})
export class ProductStoreModule { }
