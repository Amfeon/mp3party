export default class AddToPlaylist{
    constructor(songId){
            this.addForm = document.querySelector("#add-form"); // форма с overlay
            this.createNewPlaylist = document.querySelector('#new-list'); //кнопка создания нового плей листа
            this.playlistMenu = document.querySelector("#playlistMenu"); //выпадающее меню
            this.overlay = document.querySelector(".overlay");
            this.input = this.addForm.querySelector('.add-form__input');
            this.addFormAnim = this.addForm.querySelector('.add-form'); // элемент для анимации выпадания формы
            this.body = document.querySelector('body');
            this.playlistMass = this.playlistMenu.querySelectorAll('.playlistItem')
            this.songId=songId;        
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
        this.keyboardNav(this.playlistMenu);
        /*new menu */
        this.createNewPlaylist.addEventListener('click', (e)=>{
            e.preventDefault();
            this.newTitleList();
        } );
        this.overlay.addEventListener('click',(e)=>{
           if(e.target===this.overlay){
            this.cancelPlaylistMenu()
            this.body.style.overflow = '';
           }
        })
         document.getElementById('cancel').onclick = ()=>{this.cancelAddForm()};
         document.getElementById('send').onclick= ()=>{this.submitNewPlayList()};
     }

     newTitleList(){
        
        this.keyboardNav(this.addForm);
        this.cancelPlaylistMenu()
        this.addFormAnim.classList.add('add-form_animation');
        this.addForm.classList.add('overlay_visible');
    
        setTimeout(()=>{
            this.input.focus();  
            this.input.selectionStart = this.input.value.length;
        },0)
    }


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

   keyboardNav (modal){
        let focusableElementsString = 'a[href], input:not([disabled]), button:not([disabled]), [tabindex="0"]';
        let focusableElements = modal.querySelectorAll(focusableElementsString);
        focusableElements = Array.prototype.slice.call(focusableElements);    
        let firstTabStop = focusableElements[0];
        let lastTabStop = focusableElements[focusableElements.length - 1];
        modal.onkeydown = (e)=>{   
     console.log('asd');
            if (e.keyCode === 27){
                this.cancelAddForm();
                this.cancelPlaylistMenu();
            }
            if (e.keyCode === 9) {
                if (e.shiftKey) {
                  if (document.activeElement === firstTabStop) {
                    e.preventDefault();
                    lastTabStop.focus();
                  }
                // if Tab
                } else {
                  if (document.activeElement === lastTabStop) {
                    e.preventDefault();
                    firstTabStop.focus();
                  }
                }
              }
        }   
    }
    cancelPlaylistMenu(){
        this.overlay.classList.remove('overlay_visible');
        this.playlistMenu.classList.remove('playlistMenu_visible');
        this.playlistMenu.classList.remove('playlistMenu_animation');
    }
    cancelAddForm (){    
    this.body.style.overflow = '';
    this.addFormAnim.classList.remove('add-form_animation');
    this.addForm.classList.remove('overlay_visible');
    }
     submitNewPlayList(){
        this.body.style.overflow = '';
        //TODO: сделать запрос на сервер
        alert(`trackId ${this.songId} and Playlist titlt - ${this.input.value}`)
        this.cancelAddForm();
    }











}