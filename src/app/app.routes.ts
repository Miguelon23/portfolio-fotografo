import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AllAlbumsComponentComponent } from './all-albums-component/all-albums-component.component';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'gallery/:id', component: GalleryComponent},
    { path: 'all-albums', component: AllAlbumsComponentComponent},
    { path: 'upload-photo', component: UploadPhotoComponent}
];
