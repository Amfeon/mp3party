import AddToPlayList from './add-to-playlist';
import CreateNewPlaylist from './my-music';

const inputHeader       =      document.querySelector('.js-title');
const done              =      document.querySelector('.js-done'); 
const playlistTrash     =      document.querySelector('.js-playlist-trash'); 
const favor             =      document.querySelectorAll('.js-favorite');
const moreBtn           =      document.querySelectorAll('.js-add-more-btn');
const editPlaylist      =      document.querySelector('.js-edit');
const trackTrash        =      document.querySelectorAll('.js-trash');
const createNewPlaylist =      document.querySelector('#new-list'); //кнопка создания нового плей листа
let oldTitle;


function start(){
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
    if(favor.length!=0){
        addFavorListener();
    }
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

function addFavorListener(){

    favor.forEach((item)=>{
        const icon = item.querySelector('.track__icon');   
    if(item.dataset.favorite!='0' && item.dataset.favorite!=''){
        icon.classList.add('track__icon_active');        
    }
    else{
        icon.classList.remove('track__icon_active');
    }
        
        
        item.addEventListener('click', addToFavoritePlaylist);
    })
}
function addToFavoritePlaylist(){
    let id =this.dataset.songId;
    const icon = this.querySelector('.track__icon');
    if(this.dataset.favorite!='0' && this.dataset.favorite!=''){
        this.dataset.favorite = '0';
        icon.classList.remove('track__icon_active');
    }
    else{
        this.dataset.favorite = '1';
        icon.classList.add('track__icon_active');
    }
    alert(`id песни ${id}`);
}

export default start