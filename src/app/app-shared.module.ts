// ----- Modules -----
import {NgModule} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {CommonModule} from '@angular/common';
import {FactCardComponent} from './Components/Reusables/FactCard';
import {HeaderComponent} from './Components/Reusables/Header';
import {MatIconModule} from '@angular/material/icon';
import {FavoriteButtonComponent} from './Components/Reusables/FavoriteButton';
import {NoResultComponent} from './Components/Reusables/NoResultFound';


@NgModule({
  declarations: [
    HeaderComponent,
    FactCardComponent,
    FavoriteButtonComponent,
    NoResultComponent,
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
  ],
  exports: [
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    HeaderComponent,
    FactCardComponent,
    FavoriteButtonComponent,
    NoResultComponent,
  ],
  providers: []
})
export class AppSharedModuleModule {
}
