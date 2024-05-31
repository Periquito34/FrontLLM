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
  loading: boolean = false; // Variable para controlar el estado de carga

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
    this.loading = true; // Activar el indicador de carga

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
          this.uploadMessage = 'Documento subido con exito!';
          this.downloadUrl = `http://localhost:5000/download/${event.body.output_path.split('/').pop()}`;
          console.log(event.body);
          this.loading = false; // Desactivar el indicador de carga
        }
      },
      (error: HttpErrorResponse) => {
        this.uploadMessage = `Ha ocurrido un error en la carga: ${error.message}`;
        console.error(error);
        this.loading = false; // Desactivar el indicador de carga en caso de error
      }
    );
  }

  onDownload() {
    window.open(this.downloadUrl, '_blank'); // Abrir la URL de descarga en una nueva pestaña
  }
}
