import { Component, OnInit } from '@angular/core';
import { MusicDataService } from '../music-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
 album: any;
  constructor(private musicService: MusicDataService,  private route: ActivatedRoute,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.musicService.getAlbumById(id).subscribe((data) => 
    (this.album = data));
  }
  addToFavourites(trackID: any){
    this.musicService.addToFavourites(trackID).subscribe(
      (success)=>{
        this.snackBar.open("Done");
      },
      (err)=>{
        this.snackBar.open("Unable to add song to Favourites");
      }
    )
  }


}
