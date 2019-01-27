import { Component, NgModule, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppService } from 'src/app/core/service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})

export class PhotoListComponent implements OnInit, OnChanges {

  photos: any;

  @Input() selectedUser: any;

  constructor(private appService: AppService) { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.selectedUser.firstChange && this.selectedUser !== changes.selectedUser) {
      this.appService.getUserPhoto(this.selectedUser.username).subscribe((response: any) => {
        this.photos = response;
      });
    }
  }

}

@NgModule({
  imports: [BrowserModule],
  exports: [PhotoComponent],
  declarations: [PhotoComponent]
})
export class PhotoListModule { }
