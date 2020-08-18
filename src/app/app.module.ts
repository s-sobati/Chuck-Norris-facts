import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {rootReducer} from './store';
import {ApiModule} from './api/api.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppSharedModuleModule} from './app-shared.module';
import {CategoriesComponent} from './Components/Home/Categories';
import {CategoriesEffects} from './store/categories/effects';
import {HomeComponent} from './Components/Home';
import {FactsEffects} from './store/facts/effects';
import {SourceListComponent} from './Components/Home/SourceList';
import {CustomListComponent} from './Components/Home/Favorites';
import {ListsEffects} from './store/lists/effects';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    HomeComponent,
    SourceListComponent,
    CustomListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppSharedModuleModule,
    ApiModule,
    StoreModule.forRoot(rootReducer, {}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([CategoriesEffects, FactsEffects, ListsEffects]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
