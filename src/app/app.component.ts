import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AllAlbumsComponentComponent } from './all-albums-component/all-albums-component.component';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterOutlet,
    HomeComponent, 
    GalleryComponent,
    AboutComponent, 
    NavbarComponent, 
    FooterComponent, 
    AllAlbumsComponentComponent,
    UploadPhotoComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {
  title = 'portfolio-fotografo';

  constructor(public authService: AuthService) {}

}
