import { Component, NgModule, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SearchBoxComponent } from './search-box/search-box.component';
import { UserListComponent, UserListModule } from './user-list/user-list.component';
import { AppService } from 'src/app/core/service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})

export class SideBarComponent implements OnInit {

  userQuery: string;

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

  userData: Array<any>;

  constructor(private appService: AppService) {
  }

  ngOnInit() { }

  onEnterKeyPress(e) {
    this.appService.getUsers(this.userQuery).subscribe((response: any) => {
      this.userData = response.results;
    });
  }

}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    UserListModule
  ],
  exports: [
    SearchBoxComponent,
    UserListComponent
  ],
  declarations: [
    SearchBoxComponent,
    UserListComponent
  ]
})
export class SidebarModule { }
