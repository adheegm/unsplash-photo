import { Component, NgModule, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})

export class SearchBoxComponent implements OnInit {
  queryValue: string;

  @Output() queryChange = new EventEmitter();
  @Input()
  get query() {
    return this.queryValue;
  }
  set query(val) {
    this.queryValue = val;
    this.queryChange.emit(this.queryValue);
  }

  constructor() {
  }

  ngOnInit() { }

  onQueryChange(val) {
    this.query = val;
  }
}
