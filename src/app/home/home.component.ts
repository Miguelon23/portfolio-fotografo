import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
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
