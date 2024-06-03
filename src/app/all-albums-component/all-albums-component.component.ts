import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-albums-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-albums-component.component.html',
  styleUrl: './all-albums-component.component.css'
})
export class AllAlbumsComponentComponent {
  albums = [
    { id: 1, title: 'album 1', imageUrl: 'path/to/1.jpg'},
    { id: 2, title: 'album 2', imageUrl: 'path/to/2.jpg'}
  ];
}
