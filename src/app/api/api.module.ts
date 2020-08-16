import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {JokesService} from './services/jokes.service';
import {httpInterceptorProviders} from './interceptors';

/**
 * Provider for all UserApi services, plus UserApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule,
  ],
  exports: [
    HttpClientModule,
  ],
  declarations: [],
  providers: [
    JokesService,
    httpInterceptorProviders
  ],
})
export class ApiModule { }
