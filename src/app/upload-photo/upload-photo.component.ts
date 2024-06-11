import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-upload-photo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent {
  constructor(public authService: AuthService) {}

  uploadPhoto(event: any) {
    const file = event.target.files[0];
    // Para subir la foto
  }

  canUpload(): boolean {
    return this.authService.userRole === 'photographer';
  }
}
