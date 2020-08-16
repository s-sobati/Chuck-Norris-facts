// ----- Modules -----
import {NgModule} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
  providers: []
})
export class AppSharedModuleModule {
}
