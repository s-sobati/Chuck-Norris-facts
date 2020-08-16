// ----- Modules -----
import {NgModule} from '@angular/core';
/*import {
  MatButtonModule,
  MatListModule,
} from '@angular/material';*/
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatListModule,
  ],
  exports: [
    MatGridListModule,
    MatListModule,
  ],
  providers: []
})
export class AppSharedModuleModule {
}
