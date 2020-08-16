import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

import {Observable} from 'rxjs';

@Injectable()
export class JokesService {
  configUrl = environment.apiUrl + '/jokes';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    const url = this.configUrl + '/categories';
    return this.http.get(url);
  }

  getFactsData(): Observable<any> {
    const url = this.configUrl + '/search?query=animal';
    return this.http.get(url);
  }
}
