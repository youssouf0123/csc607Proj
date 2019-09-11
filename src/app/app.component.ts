import { Component } from '@angular/core';
import { Track } from 'ngx-audio-player';   

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	displayVolumeControls = true;
	msaapDisplayTitle = true;
	msaapDisplayPlayList = true;
	msaapPageSizeOptions = [2,4,6];
	msaapDisplayVolumeControls = true;
	   
	// Material Style Advance Audio Player Playlist
	msaapPlaylist: Track[] = [
	  {
	    title: 'Audio One Title',
	    link: 'https://www.computerhope.com/jargon/m/example.mp3'
	  },
	  {
	    title: 'Audio Two Title',
	    link: 'https://www.computerhope.com/jargon/m/example.mp3'
	  },
	  {
	    title: 'Audio Three Title',
	    link: 'https://www.computerhope.com/jargon/m/example.mp3'
	  },
	];


}