const addForm = document.querySelector("#add-form");
const newList = document.querySelector('#new-list');
const modalForm = document.querySelector("#playlistMenu");
const overlay = document.querySelector(".overlay");
const input = addForm.querySelector('.add-form__input');
const addFormAnim = addForm.querySelector('.add-form');
const body = document.querySelector('body');

let songId;
const addToPlayList = function(e){
    if(e.target.parentNode.classList.contains ('add-favorites-btn')){
        songId =e.target.parentNode.dataset.songId;
    }else{
        songId = e.target.dataset.songId;
    }
    addForm.addEventListener('keyup',(e)=>{
        if (e.keyCode === 27){
            cancelAddForm();
        }
    });
    body.style.overflow = 'hidden';
    overlay.classList.add('overlay_visible');
    modalForm.classList.add('playlistMenu_animation');
    newList.addEventListener('click', newTitleList);
    overlay.addEventListener('click',(e)=>{
       if(e.target===overlay){
        overlay.classList.remove('overlay_visible');
        modalForm.classList.remove('playlistMenu_animation');
        body.style.overflow = '';
       }
    })
     document.getElementById('cancel').addEventListener('click', cancelAddForm);
     document.getElementById('send').addEventListener('click', submitNewPlayList)
 }


 const newTitleList = function(){

    modalForm.classList.remove('playlistMenu_visible');
    overlay.classList.remove('overlay_visible');
    modalForm.classList.remove('playlistMenu_animation');
    addFormAnim.classList.add('add-form_animation');
    addForm.classList.add('overlay_visible');

    setTimeout(()=>{
        input.focus();  
        input.selectionStart = input.value.length;
    },0)
}
const cancelAddForm = function(){    
   body.style.overflow = '';
   addFormAnim.classList.remove('add-form_animation');
   addForm.classList.remove('overlay_visible');
}
const submitNewPlayList = function(){
    body.style.overflow = '';
    alert(`trackId ${songId} and Playlist titlt - ${input.value}`)
//TODO: сделать запрос на сервер, получить ответ с id нового плей листа и записать в массив.

    cancelAddForm();
}


 export default addToPlayList;