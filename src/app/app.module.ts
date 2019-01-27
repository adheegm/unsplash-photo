import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SideBarComponent, SidebarModule } from './components/side-bar/side-bar.component';
import { PhotoListModule, PhotoListComponent } from './components/photo-list/photo-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppService } from './core/service';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    PhotoListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    PhotoListModule,
    SidebarModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
