import AddToPlaylist from './add-to-playlist';

export default class MyMusic extends AddToPlaylist{
    constructor(addForm){
        super(addForm);
        // this.addForm = document.querySelector("#add-form"); // форма с overlay
        // this.createNewPlaylist = document.querySelector('#new-list'); //кнопка создания нового плей листа
        // this.overlay = document.querySelector(".overlay");
        // this.input = this.addForm.querySelector('.add-form__input');
        // this.addFormAnim = this.addForm.querySelector('.add-form'); // элемент для анимации выпадания формы
    }

}