import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule
} from "@angular/material";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadModule } from './upload/upload.module';
import { FileListComponent } from './file-list/file-list.component';

@NgModule({
  declarations: [AppComponent, FileListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UploadModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
