import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-UploadImages',
  templateUrl: './UploadImages.component.html',
  styleUrls: ['./UploadImages.component.css']
})
export class UploadImagesComponent implements OnInit {

  msg: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSelectFile(event){
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const formData = new FormData();
      formData.append('file', file);

      this.http.post('https://localhost:44340/api/Upload', formData).subscribe();
      this.msg = 'Upload Realizado com sucesso'
    }
  }
}
