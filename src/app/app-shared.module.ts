// ----- Modules -----
import {NgModule} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
  ],
  exports: [
    MatGridListModule,
    MatButtonModule,
    MatListModule,
  ],
  providers: []
})
export class AppSharedModuleModule {
}
