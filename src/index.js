import './css/main.scss'
import addToPlayList from './playlist-menu';

const favor = document.querySelector('.add-more-btn');
if(favor){
    favor.addEventListener('click', addToPlayList);
}
