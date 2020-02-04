const modalForm = document.querySelector(".add-to-playlist");
const addForm = document.querySelector("#add-form");

const addToPlayList = function(){
    addForm.classList.add('add-to-playlist_visible');
    let input = addForm.querySelector('input');
    input.focus();
}
export default addToPlayList