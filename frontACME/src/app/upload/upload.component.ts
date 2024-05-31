import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  file: File | null = null;
  uploadSuccess: boolean = false;
  uploadError: string | null = null;
  downloadLink: string | null = null;

  constructor(private http: HttpClient) {}

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.uploadSuccess = false;
      this.uploadError = null;
    }
  }

  onSubmit() {
    if (this.file) {
      const formData = new FormData();
      formData.append('file', this.file);

      this.http.post<any>('http://localhost:5000/process-pdf', formData).subscribe({
        next: (response) => {
          this.uploadSuccess = true;
          this.downloadLink = `http://localhost:5000/download/${response.output_path}`;
        },
        error: (error) => {
          this.uploadError = 'Error uploading file. Please try again.';
          console.error('Error uploading file:', error);
        }
      });
    }
  }
}
  