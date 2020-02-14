
export default class CreateNewPlaylist{
    constructor(){
         this.addForm = document.querySelector("#add-form"); // форма с overlay      
         this.input = this.addForm.querySelector('.add-form__input');
         this.addFormAnim = this.addForm.querySelector('.add-form'); // элемент для анимации выпадания формы
         this.body = document.querySelector('body'); // скрытие scroll
         document.getElementById('cancel').onclick = ()=>{this.cancelAddForm()};
         document.getElementById('send').onclick= ()=>{this.submitNewPlayList()};
    }
    newTitlePlaylist(){

        this.keyboardNav(this.addForm);
        this.addFormAnim.classList.add('add-form_animation');
        this.addForm.classList.add('overlay_visible');
        setTimeout(()=>{
            this.input.focus();  
            this.input.selectionStart = this.input.value.length;
        },0)
    }
    keyboardNav (modal){
        let focusableElementsString = 'a[href], input:not([disabled]), button:not([disabled]), [tabindex="0"]';
        let focusableElements = modal.querySelectorAll(focusableElementsString);
        focusableElements = Array.prototype.slice.call(focusableElements);    
        let firstTabStop = focusableElements[0];
        let lastTabStop = focusableElements[focusableElements.length - 1];
        modal.onkeydown = (e)=>{   
            if (e.keyCode === 27){
                this.cancelAddForm();
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
    cancelAddForm (){    
        this.body.style.overflow = '';
        this.addFormAnim.classList.remove('add-form_animation');
        this.addForm.classList.remove('overlay_visible');
        }
        submitNewPlayList(){
            this.body.style.overflow = '';
            //TODO: сделать запрос на сервер и в зависимости от backend дальнейште действия
            alert(` Playlist title - ${this.input.value}`)
            this.cancelAddForm();
        }

}