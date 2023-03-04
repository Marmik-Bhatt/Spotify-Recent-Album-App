import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-artist-discography',
  templateUrl: './artist-discography.component.html',
  styleUrls: ['./artist-discography.component.css']
})
export class ArtistDiscographyComponent implements OnInit {
 albums : Array<any>;
 artist: any;

  constructor(private route: ActivatedRoute, private musicData: MusicDataService)
   {

    }
  
  ngOnInit(): void {
  let id = this.route.snapshot.params['id'];
    this.musicData.getArtistById(id).subscribe((data) => {
      this.artist = data;
    });
    this.musicData.getAlbumsByArtistId(id).subscribe((data) => {
      const viewAlbum = new Set();
      let iso= data.items;
      this.albums = iso.filter((album: { name: unknown }) => {
        const checkIndi = viewAlbum.has(album.name);
        viewAlbum.add(album.name);
        return !checkIndi; 
      });
    });
  }
}
