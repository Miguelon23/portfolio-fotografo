import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";

interface Album {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
  isHovered?: boolean;
}

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, AboutComponent, ContactComponent]
})
export class HomeComponent {
  albums: Album[] = [
    { id: 1, title: '', imageUrl: 'assets/images/1.jpeg', link: '/gallery/1'},
    { id: 2, title: '', imageUrl: 'assets/images/2.jpeg', link: '/gallery/2'}
  ];

  constructor(private router: Router) {}

  navigateToAlbum(link: string): void{
    this.router.navigate([link]);
  }

  toggleHover(album: Album, isHovered: boolean): void {
    album.isHovered = isHovered;
  }

  navigateToAllAlbums(): void {
    this.router.navigate(['/all-albums']);
  }
}
