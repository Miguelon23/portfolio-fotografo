import { provideRouter, Routes } from "@angular/router";
import { importProvidersFrom } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { AboutComponent } from "./about/about.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AllAlbumsComponentComponent } from "./all-albums-component/all-albums-component.component";
import { FooterComponent } from "./footer/footer.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'gallery/:id', component: GalleryComponent},
  { path: 'all-albums', component: AllAlbumsComponentComponent},
  { path: 'about', component: AboutComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'footer', component: FooterComponent},
];

export const appConfig = {
  providers: [
    provideRouter(routes),
  ],
};
