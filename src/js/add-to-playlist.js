import CreateNewPlaylist from './my-music';
export default class AddToPlaylist{
    constructor(songId){
            this.addForm = document.querySelector("#add-form"); // форма с overlay
            this.createNewPlaylist = document.querySelector('#new-list'); //кнопка создания нового плей листа
            this.playlistMenu = document.querySelector("#playlistMenu"); //выпадающее меню
            this.overlay = document.querySelector(".overlay");
           // this.input = this.addForm.querySelector('.add-form__input');
           //this.addFormAnim = this.addForm.querySelector('.add-form'); // элемент для анимации выпадания формы
            this.body = document.querySelector('body');
            this.playlistMass = this.playlistMenu.querySelectorAll('.playlistItem');
            this.songId=songId; 
            this.modalForm = new CreateNewPlaylist(this.renderPlaylistItem);       
    }
    getSongId(){
        this.songId= this.dataset.songId;
    }
    addToPlayList(){
        console.log(this.songId);
        this.addListener();        
        this.body.style.overflow = 'hidden';
        this.overlay.classList.add('overlay_visible');
        this.playlistMenu.classList.add('playlistMenu_animation');
        setTimeout(()=>{
            this.createNewPlaylist.focus();  
        },1000)
        this.modalForm.keyboardNav(this.playlistMenu);
        /*new menu */
        this.createNewPlaylist.addEventListener('click', (e)=>{
            e.preventDefault();
            this.cancelPlaylistMenu();
            this.modalForm.newTitlePlaylist();
        } );
        this.overlay.addEventListener('click',(e)=>{
           if(e.target===this.overlay){
            this.cancelPlaylistMenu();
            this.body.style.overflow = '';
           }
        })
        // document.getElementById('cancel').onclick = ()=>{this.cancelAddForm()};
        // document.getElementById('send').onclick= ()=>{this.submitNewPlayList()};
     }

    //  newTitleList(){
    //     this.modalForm.keyboardNav(this.addForm);
    //     this.cancelPlaylistMenu()
    //     this.addFormAnim.classList.add('add-form_animation');
    //     this.addForm.classList.add('overlay_visible');
    //         setTimeout(()=>{
    //         this.input.focus();  
    //         this.input.selectionStart = this.input.value.length;
    //     },0)
    // }


    addListener(){
        this.playlistMass.forEach((item)=>{
            if(item.id!="new-list"){  
                item.onclick = (e)=>{
                    e.preventDefault();
                    this.playlistId = e.currentTarget.dataset.playlistId;
                    this.checkedPlayilist()
                }
            }
        })
    }

    checkedPlayilist (){
        //TODO: сделать запрос на сервер    
        alert(`trackId ${this.songId} and Playlist id - ${this.playlistId}`);
        this.cancelPlaylistMenu();
    }

   
    cancelPlaylistMenu(){
        this.overlay.classList.remove('overlay_visible');
        this.playlistMenu.classList.remove('playlistMenu_visible');
        this.playlistMenu.classList.remove('playlistMenu_animation');
    }
    // cancelAddForm (){    
    // this.body.style.overflow = '';
    // this.addFormAnim.classList.remove('add-form_animation');
    // this.addForm.classList.remove('overlay_visible');
    // }
    //  submitNewPlayList(){
    //     this.body.style.overflow = '';
    //     //TODO: сделать запрос на сервер
    //     alert(`trackId ${this.songId} and Playlist titlt - ${this.input.value}`)
    //     this.cancelAddForm();
    // }
    playlistItem(playlist) {
        //TODO: вынести в отсдельный класс
        let playlistItem = document.createElement('a')
        playlistItem.dataset.playlistId = playlist.id
        playlistItem.classList.add('playlistItem')
    
        let playlistItemIcon = document.createElement('div')
        playlistItemIcon.classList.add('playlistItem__icon')
    
        let playlistItemSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        playlistItemSvg.setAttributeNS(null, 'width', '24')
        playlistItemSvg.setAttributeNS(null, 'height', '24')
        playlistItemSvg.setAttributeNS(null, 'viewbox', '0 0 24 24')
        playlistItemSvg.setAttributeNS(null, 'fill', 'none')
        // playlistItemSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    
        let playlistItemSvgPath = document.createElementNS("http://www.w3.org/2000/svg", 'path')
        playlistItemSvgPath.setAttribute('d', 'M16.5706 21.6186C17.7924 22.261 18.9716 21.4055 18.738 20.0439L17.8623 14.9379C17.8708 14.9875 21.5592 11.3612 21.5592 11.3612C22.5477 10.3976 22.0985 9.01182 20.7313 8.81316L15.6046 8.0682C15.6544 8.07545 13.3453 3.44694 13.3453 3.44694C12.7344 2.20903 11.2776 2.20809 10.6662 3.44694L8.37348 8.09253C8.39578 8.04736 3.28026 8.81316 3.28026 8.81316C1.91414 9.01167 1.46308 10.3968 2.45236 11.3612L6.16209 14.9772C6.12602 14.9421 5.27355 20.0439 5.27355 20.0439C5.04019 21.4045 6.21819 22.2615 7.441 21.6186L12.0265 19.2079C11.9819 19.2313 16.5706 21.6186 16.5706 21.6186Z')
        playlistItemSvgPath.setAttribute('fill', '#ffb300')
        playlistItemSvg.appendChild(playlistItemSvgPath)
    
        playlistItemIcon.appendChild(playlistItemSvg)
    
        let playlistItemTitle = document.createElement('div')
        playlistItemTitle.classList.add('playlistItem__title')
        playlistItemTitle.appendChild(document.createTextNode(playlist.title))
    
        let playlistItemCount = document.createElement('div')
        playlistItemCount.classList.add('playlistItem__count')
        playlistItemCount.appendChild(document.createTextNode(playlist.songs_count))
    
        playlistItem.appendChild(playlistItemIcon)
        playlistItem.appendChild(playlistItemTitle)
        playlistItem.appendChild(playlistItemCount)
        return playlistItem
      }
    
    renderPlaylistItem(playlist) {
        console.log('перерендер')
        let playlistItem = this.playlistItem(playlist)
        let oldPlaylistItem = this.playlistMenuBody.querySelector(`[data-playlist-id='${playlist.id}']`)
    
        if (oldPlaylistItem) {
          this.playlistMenuBody.replaceChild(playlistItem, oldPlaylistItem)
        } else {
          this.playlistMenuBody.appendChild(playlistItem)
        }
      }











}