const modalForm = document.querySelector(".overlay");
const newList = document.querySelector('#new-list');

const addToPlayList = function(){
    modalForm.classList.add('overlay_visible');
    // newList.addEventListener('click', newTitleList);
    // renderPlaylist();
    modalForm.addEventListener('click',(e)=>{
        console.log('click')
       if(e.target===modalForm){
        modalForm.classList.remove('overlay_visible');
       }
    })
    // document.getElementById('cancel').addEventListener('click', cancelAddForm);
    // document.getElementById('send').addEventListener('click', submitNewPlayList)
 }

 export default addToPlayList;