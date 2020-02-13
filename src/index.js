import './css/main.scss'
//import addToPlayList from './playlist-menu';
import AddToPlayList from './add-to-playlist';
import MyMusic from './my-music';

const favor = document.querySelector('.add-more-btn');


if(favor){
    favor.addEventListener('click',function(){
        let songId = this.dataset.songId;
        if(songId){
            let newPlaylist = new AddToPlayList(songId);
            newPlaylist.addToPlayList();
        }
    });
}
let a = new MyMusic();