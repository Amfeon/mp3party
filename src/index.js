import './css/main.scss'
//import addToPlayList from './playlist-menu';
import AddToPlayList from './add-to-playlist';
import CreateNewPlaylist from './my-music';

const moreBtn           =      document.querySelectorAll('.js-add-more-btn');
const favor             =      document.querySelectorAll('.js-favorite');
const createNewPlaylist =      document.querySelector('#new-list'); //кнопка создания нового плей листа
const trackTrash        =      document.querySelectorAll('.js-trash');
const done              =      document.querySelector('.js-done'); 
const playlistTrash = document.querySelector('.js-playlist-trash'); 
const editPlaylist= document.querySelector('.js-edit');
const inputHeader = document.querySelector('.js-title');
let oldTitle;
if(moreBtn.length!=0){
    moreBtn.forEach((item)=>{
    item.addEventListener('click',function(){       
        let songId = this.dataset.songId;
        if(songId){
            let newPlaylist = new AddToPlayList(songId);
            newPlaylist.addToPlayList();
        }
    });
    });
}
if(trackTrash.length!=0){
    editPlaylist.onclick = editModePlaylist;
    trackTrash.forEach((item)=>{
            item.addEventListener('click',function(){    
                let songId = this.dataset.songId;
                let plId= this.dataset.playlistId;
                console.log('УДалить',songId, plId)
            });
    });
}
if(createNewPlaylist){
    let newPlaylist = new CreateNewPlaylist();
    createNewPlaylist.addEventListener('click',(e)=>{
        e.preventDefault();
        newPlaylist.newTitlePlaylist(); 
    } )
}

function editModePlaylist(){
    oldTitle= inputHeader.value;
    inputHeader.removeAttribute('disabled');
    inputHeader.classList.add('myplaylist__title_edit');
    inputHeader.focus();
    inputHeader.selectionStart = inputHeader.value.length;
    done.classList.remove('myplaylist__action_hidden');
    done.onclick = doneEditPlaylist;
    playlistTrash.classList.remove('myplaylist__action_hidden');
    playlistTrash.onclick = function(){
        alert(`Удаление плейлиста ${this.dataset.playlistId}`);
    }
    this.classList.add('myplaylist__action_hidden');
    for(let i=0; i<moreBtn.length; i++){
        moreBtn[i].classList.add('track__btn_hidden');
        favor[i].classList.add('track__btn_hidden');
        trackTrash[i].classList.toggle('track__btn_hidden');
    }
}
function doneEditPlaylist(){
    if(oldTitle !== inputHeader.value){
        //TODO: сделать запрос на изменение заголовка плейлиста
        alert(`Плейлист изменился на ${inputHeader.value}`);    
    }
    alert("закончить редактирование плейлиста");
    inputHeader.setAttribute('disabled','true');
    inputHeader.classList.remove('myplaylist__title_edit');
    playlistTrash.classList.add('myplaylist__action_hidden');
    done.classList.add('myplaylist__action_hidden');
    editPlaylist.classList.remove('myplaylist__action_hidden');
    for(let i=0; i<moreBtn.length; i++){
        moreBtn[i].classList.remove('track__btn_hidden');
        favor[i].classList.remove('track__btn_hidden');
        trackTrash[i].classList.toggle('track__btn_hidden');
    }
}