const addForm = document.querySelector("#add-form");
const newList = document.querySelector('#new-list');
const playlistMenu = document.querySelector("#playlistMenu");
const overlay = document.querySelector(".overlay");
const input = addForm.querySelector('.add-form__input');
const addFormAnim = addForm.querySelector('.add-form');
const body = document.querySelector('body');
const playlistMass = playlistMenu.querySelectorAll('.playlistItem')
let songId;
// const addToPlayList = function(){
//     addListener();
//     songId= this.dataset.songId;
//     body.style.overflow = 'hidden';
//     overlay.classList.add('overlay_visible');
//     playlistMenu.classList.add('playlistMenu_animation');
//     setTimeout(()=>{
//         newList.focus();  
//     },1000)
//     keyboardNav(playlistMenu);
//     newList.addEventListener('click', newTitleList);
//     overlay.addEventListener('click',(e)=>{
//        if(e.target===overlay){
//         cancelPlaylistMenu()
//         body.style.overflow = '';
//        }
//     })
//      document.getElementById('cancel').addEventListener('click', cancelAddForm);
//      document.getElementById('send').addEventListener('click', submitNewPlayList)
//  }


 const newTitleList = function(e){
    e.preventDefault();
    keyboardNav(addForm);
    cancelPlaylistMenu()
    addFormAnim.classList.add('add-form_animation');
    addForm.classList.add('overlay_visible');

    setTimeout(()=>{
        input.focus();  
        input.selectionStart = input.value.length;
    },0)
}
// const cancelAddForm = function(){    
//    body.style.overflow = '';
//    addFormAnim.classList.remove('add-form_animation');
//    addForm.classList.remove('overlay_visible');
// }

// const cancelPlaylistMenu = function(){
//     overlay.classList.remove('overlay_visible');
//     playlistMenu.classList.remove('playlistMenu_visible');
//     playlistMenu.classList.remove('playlistMenu_animation');
// }

const submitNewPlayList = function(){
    body.style.overflow = '';
    //TODO: сделать запрос на сервер
    alert(`trackId ${songId} and Playlist titlt - ${input.value}`)
    cancelAddForm();
}
// const addListener = function(){
//     playlistMass.forEach((item)=>{
//         if(item.id!="new-list"){  
//             item.addEventListener('click', checkedPlayilist)
//         }
//     })
// }
// const checkedPlayilist = function(e){
//     e.preventDefault();
//     //TODO: сделать запрос на сервер    
//     alert(`trackId ${songId} and Playlist id - ${this.dataset.playlistId}`);
//     cancelPlaylistMenu();
// }
const keyboardNav = function(modal){
    /**asdf*/
     console.log('asd');
    let focusableElementsString = 'a[href], input:not([disabled]), button:not([disabled]), [tabindex="0"]';
    let focusableElements = modal.querySelectorAll(focusableElementsString);
    focusableElements = Array.prototype.slice.call(focusableElements);    
    let firstTabStop = focusableElements[0];
    let lastTabStop = focusableElements[focusableElements.length - 1];
    modal.addEventListener('keydown', (e)=>{   
 
        if (e.keyCode === 27){
            cancelAddForm();
            cancelPlaylistMenu();
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
    })


}
 export default addToPlayList;