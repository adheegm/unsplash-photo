import { Component, NgModule, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {

  @Input() users: Array<any>;

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

  ngOnInit() {

  }
}

@NgModule({
  imports: [BrowserModule],
  exports: [UserComponent],
  declarations: [UserComponent]
})
export class UserListModule { }
