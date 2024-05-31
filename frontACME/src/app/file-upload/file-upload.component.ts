import { Component } from '@angular/core';
import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  selectedFile: File | null = null;
  uploadMessage: string = '';
  downloadUrl: string = '';

  constructor(private http: HttpClient) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (!this.selectedFile) {
      this.uploadMessage = 'Please select a file first.';
      return;
    }

    const formData: FormData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post<any>('http://localhost:5000/upload', formData, {
      reportProgress: true,
      observe: 'events'
    }).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          if (event.total !== undefined) {
            console.log(`File is ${Math.round(100 * event.loaded / event.total)}% uploaded.`);
          } else {
            console.log('File is being uploaded...');
          }
        } else if (event.type === HttpEventType.Response) {
          this.uploadMessage = 'File uploaded successfully!';
          this.downloadUrl = `http://localhost:5000/download/${event.body.output_path.split('/').pop()}`;
          console.log(event.body);
        }
      },
      (error: HttpErrorResponse) => {
        this.uploadMessage = `File upload failed: ${error.message}`;
        console.error(error);
      }
    );
  }

  onDownload() {
    window.open(this.downloadUrl, '_blank'); // Abrir la URL de descarga en una nueva pestaña
  }
}
