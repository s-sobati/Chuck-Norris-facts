import {Component, Input, OnInit} from '@angular/core';
import {Fact} from '../../../store/facts/reducer';

@Component({
  selector: 'app-fact-card',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class FactCardComponent implements OnInit {
  @Input() data: Fact;

  ngOnInit(): void {}

}
