import { Component, NgModule, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: any;

  selectedUserValue: any;
  @Input()
  get selectedUser() {
    return this.selectedUserValue;
  }
  set selectedUser(val) {
    this.selectedUserValue = val;
    this.selectedUserChange.emit(this.selectedUserValue);
  }
  @Output() selectedUserChange = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onUserClick(e) {
    this.selectedUser = this.user;
  }
}
