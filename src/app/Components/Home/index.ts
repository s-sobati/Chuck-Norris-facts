import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-header></app-header>
    <app-categories></app-categories>
    <div class="container-fluid">
      <div class="row">
    <app-source-list class="col-12 col-sm-6 border-right"></app-source-list>
    <app-custom-list class="col-12 col-sm-6"></app-custom-list>
      </div>
    </div>
  `,
  styleUrls: ['./index.scss']
})
export class HomeComponent {

}

