import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  albumId: number = 0;
  photos: string[] = [];

  constructor(private route: ActivatedRoute, public authService: AuthService) {}

    ngOnInit() {
      this.albumId = +this.route.snapshot.paramMap.get('id')!;
      this.photos = ['paisaje1.jpeg', 'paisaje2.jpeg', 'paisaje3.jpeg', 'paisaje4.jpeg', 'paisaje5.jpeg', '2.jpeg', '4.jpeg'].map(photo => `assets/galeria/${photo}`);
    }
}
