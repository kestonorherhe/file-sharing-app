import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FilesService } from 'src/services/files.service';

@Component({
  selector: "app-file-list",
  templateUrl: "./file-list.component.html",
  styleUrls: ["./file-list.component.css"]
})
export class FileListComponent implements OnInit {

  files: any = []
  status: any
  blob: any

  constructor(private _fileService: FilesService) {}

  ngOnInit() {
    this.files = []
    this._fileService.getFiles()
        .subscribe(data => this.files = data)
  }

  // download files
  // downloadFile(name) {
  //   console.log(name)
  //   this.status
  //   this._fileService.downloadFile(name)
  //                     .subscribe(data => this.status = data)
  //   console.log('download me!');
  // }

  downloadFile(name) {
    console.log(name);
    this._fileService.downloadFile(name)
      .subscribe((data) => {
        console.log(data);
        this.blob = new Blob([data], {
          type: "	application/pdf"
        });

        var downloadURL = window.URL.createObjectURL(data);
        var link = document.createElement('a');
        link.href = downloadURL;
        link.download = name;
        link.click();
      })
  };
}
