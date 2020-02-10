const modalForm = document.querySelector(".add-to-playlist");
const addForm = document.querySelector("#add-form");
const newList = document.querySelector('#new-list');
const input = addForm.querySelector('input');
const currentPlayList = document.querySelector('.playlist__list');
const favor = document.querySelector('#favorit_item');

const playList=[
    {
        title : "Избранное",
        id: 1,
        trackCount: 10
    },
    {
        title : "Для пробежки",
        id: 2,
        trackCount: 10
    }
];




const addToPlayList = function(){
    modalForm.classList.add('add-to-playlist_visible');
    newList.addEventListener('click', newTitleList);
    renderPlaylist();
    modalForm.addEventListener('click',(e)=>{
       if(e.target===modalForm){
        modalForm.classList.remove('add-to-playlist_visible');
       }
    })
    document.getElementById('cancel').addEventListener('click', cancelAddForm);
    document.getElementById('send').addEventListener('click', submitNewPlayList)
 
}
const newTitleList = function(){

    modalForm.classList.remove('add-to-playlist_visible');
    addForm.classList.add('add-to-playlist_visible');

    input.focus();
    input.selectionStart = input.value.length;
}
const cancelAddForm = function(){
    addForm.classList.remove('add-to-playlist_visible');
}
const submitNewPlayList = function(){
    let newPlaylist = {
        title : input.value,
        id: 10,
        trackCount:1
    }
//TODO: сделать запрос на сервер, получить ответ с id нового плей листа и записать в массив.
    playList.push(newPlaylist); 
    console.log(newPlaylist, playList);
    cancelAddForm();
}

// const renderPlaylist = function(){
//     const icon = '<i class="fa fa-heart-o" aria-hidden="true"></i>';
//     currentPlayList.innerHTML='';
//     currentPlayList.append(favor);
//     console.log(currentPlayList);
//     for(let i =1; i<playList.length; i++){
//         const pList = document.createElement('div');
//         const divIcon = document.createElement('div');
//         const divTitle =document.createElement('div');
//         const divCount = document.createElement('div');
//         pList.classList.add('playlist__item');
//         divIcon.classList.add('item__icon');
//         divTitle.classList.add('item__text');
//         divCount.classList.add('item__count');
//         divIcon.innerHTML = icon;
//         divTitle.innerText=playList[i].title;
//         divCount.innerText=playList[i].trackCount;
//         pList.append(divIcon,divTitle,divCount);
//         currentPlayList.append(pList);
//     }  
// }


export default addToPlayList