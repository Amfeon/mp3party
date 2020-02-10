export default class PlaylistMenu{
    constructor(){
       // this.modalForm = document.querySelector("#add-to-playlist");        
        this.addForm= document.querySelector('#add-form');
      //  document.querySelector('.header__icon').addEventListener('click', this.addNewPlaylist.bind(this));
    }

     addToPlayList(){
        // if(this.dataset.songId){
        //      songId = this.dataset.songId
        // }
        const modalForm = document.querySelector("#add-to-playlist");    
        modalForm.classList.add('add-to-playlist_visible');
       // newList.addEventListener('click', newTitleList);
       // renderPlaylist(songId);
        modalForm.addEventListener('click',(e)=>{
           if(e.target===modalForm){
            modalForm.classList.remove('add-to-playlist_visible');
           }
        })
       // document.getElementById('cancel').addEventListener('click', cancelAddForm);
      //  document.getElementById('send').addEventListener('click', submitNewPlayList)
    }

    addNewPlaylist(){
        this.addForm.classList.add('add-to-playlist_visible');
        const input = this.addForm.querySelector('input');
        input.focus();
        input.selectionStart = input.value.length;
    }
    
     cancelAddForm (){
        this.addForm.classList.remove('add-to-playlist_visible');
    }   
    
    submitNewPlayList(){
        const input = this.addForm.querySelector('input');
        let newPlaylist = {
            title : input.value,
            id: 10,
            trackCount:1
        }
    //TODO: сделать запрос на сервер, получить ответ с id нового плей листа и записать в массив.
     this.playlistMass.push(newPlaylist); 
        this.cancelAddForm();
        this.renderPlaylist();
    }
}