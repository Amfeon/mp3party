export default class RenderPlaylist {
    constructor(){
        this.playlistMass=[
            {
                title : "В дальнюю дорогу",
                id: 2,
                trackCount: 10
            },
            {
                title : "Для пробежки",
                id: 2,
                trackCount: 10
            }
        ];
        this.trackMass = [
            {
                id : "10",
                title: "НАзвание трека",
                author: "автор трека",
                logo:"images/Art.png",
                bitrate: "320",
                size: "2.7",
                time: "3:10"
           },
           {
               id : "11",
               title: "НАзвание трека2",
               author: "автор трека2",
               logo:"images/Art.png",
               bitrate: "320",
               size: "2.5",
               time: "2:10"

          }
       ]
      this.addForm= document.querySelector('#add-form');
      this.addForm.querySelector('#cancel').addEventListener('click', this.cancelAddForm.bind(this) );
      this.addForm.querySelector('#send').addEventListener('click', this.submitNewPlayList.bind(this) );
      document.querySelector('.header__icon').addEventListener('click', this.addNewPlaylist.bind(this));
     
      this.playlistBody = document.querySelector('#playlist-body');
      this.playlist =  document.querySelectorAll('.other-playlist-item');
      this.playlist.forEach((item)=>{
            console.log(item);
            item.addEventListener('click', this.renderTracks.bind(this));
        })
        this.renderPlaylist();
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


    // renderTracks(){       
    //    this.playlistBody.innerHTML='';
    //     for(let i = 0; i< this.trackMass.length; i++){
    //         const trackItem     =   document.createElement('div');
    //         const trackLogo     =   document.createElement('div');
    //         const trackImg      =   document.createElement('img');
    //         const trackBody     =   document.createElement('div');
    //         const trackTitle    =   document.createElement('div');
    //         const trackAuthor   =   document.createElement('div');     
    //         const trackInfo     =   document.createElement('div');    
    //         const trackTime     =   document.createElement('div');  
    //         const trackSize     =   document.createElement('div');  
    //         const trackBitrate  =   document.createElement('div');  
    //         const trackIcons    =   document.createElement('div');  
    //         trackItem.dataset.songId = this.trackMass[i].id;
    //         trackItem.classList.add('track-item');
    //         trackLogo.classList.add('track__logo');
    //         trackBody.classList.add('track-body');
    //         trackTitle.classList.add('track__title');
    //         trackAuthor.classList.add('track__author');
    //         trackInfo.classList.add('track-info');

    //         trackTime.classList.add('track__time');
    //         trackSize.classList.add('track__size');
    //         trackBitrate.classList.add('track__bitrate');

    //         trackIcons.classList.add('track-icons');

    //         trackTime.innerHTML     =    this.trackMass[i].time;
    //         trackSize.innerHTML     =   `${this.trackMass[i].size} Мб`;
    //         trackBitrate.innerHTML  =   `${this.trackMass[i].bitrate} Кб/с`;

    //         trackInfo.append(trackTime, trackSize ,trackBitrate);

    //         trackImg.setAttribute("src", this.trackMass[i].logo);
    //         trackTitle.innerHTML = this.trackMass[i].title;
    //         trackAuthor.innerHTML = this.trackMass[i].author;
    //         trackIcons.append(this.createSVG('star'), this.createSVG('more'));
    //         trackBody.append(trackTitle, trackAuthor, trackInfo);
    //         trackLogo.append(trackImg);
    //         trackItem.append(trackLogo, trackBody, trackIcons);
    //         this.playlistBody.append(trackItem);

    //     }

    // }

    renderPlaylist(){
        const body =document.querySelector('#other-playlist');
        body.innerHTML = '';        
        for(let i = 0; i< this.playlistMass.length; i++){
            const plItem     =   document.createElement('div');
            const plIcon     =   document.createElement('div');
            const plBody     =   document.createElement('div');
            const plTitle    =   document.createElement('div');
            const plCount    =   document.createElement('div');
            plItem.classList.add('other-playlist-item');
            plIcon.classList.add('item__icon');          
            plIcon.append(this.createSVG('heart'));
            plBody.classList.add('item__body');
            plTitle.classList.add('item__title');
            plCount.classList.add('item__count');
           // plItem.addEventListener('click', this.renderTracks.bind(this));
            plTitle.innerText = this.playlistMass[i].title;
            plCount.innerText = this.playlistMass[i].trackCount;
            plBody.append(plTitle, plCount)
            plItem.append(plIcon,plBody)
            body.append(plItem);
        }        
    }
    createSVG(type){
                /*Создаём тег SVG*/
                let mysvg=document.createElementNS("http://www.w3.org/2000/svg", 'svg');
                mysvg.setAttribute('width','24');
                mysvg.setAttribute('height','24');
                mysvg.setAttribute('viewBox','0 0 24 24');
                mysvg.setAttribute('fill','none');
                const newPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');

        if(type=='star'){
            newPath.setAttribute('class', 'star');
            newPath.setAttribute('stroke', '#a6cfe2');
            newPath.setAttribute('stroke-linecap', 'miter');
            newPath.setAttribute('fill-rule', 'evenodd');
            newPath.setAttribute('stroke-width', '2');
            newPath.setAttribute('d', 'M16.5706 21.6187C17.7924 22.261 18.9716 21.4055 18.738 20.0439L17.8623 14.9379C17.8708 14.9876 21.5592 11.3612 21.5592 11.3612C22.5477 10.3976 22.0985 9.01185 20.7313 8.81319L15.6046 8.06823C15.6544 8.07548 13.3453 3.44697 13.3453 3.44697C12.7344 2.20906 11.2776 2.20812 10.6662 3.44697L8.37348 8.09256C8.39578 8.04739 3.28026 8.81319 3.28026 8.81319C1.91414 9.0117 1.46308 10.3969 2.45236 11.3612L6.16209 14.9773C6.12602 14.9421 5.27355 20.0439 5.27355 20.0439C5.04019 21.4045 6.21819 22.2615 7.441 21.6187L12.0265 19.2079C11.9819 19.2314 16.5706 21.6187 16.5706 21.6187Z');
            mysvg.append(newPath);
            return mysvg;
        }
        if(type=='heart'){
                mysvg.setAttribute('class', 'heart');
                newPath.setAttribute('fill-rule', 'evenodd');
                newPath.setAttribute('clip-rule', 'evenodd');
                newPath.setAttribute('fill', '#A6CFE2');
                newPath.setAttribute('d', 'M16 3C14.4633 3 13.0615 3.57771 12 4.52779C10.9385 3.57771 9.53671 3 8 3C4.68629 3 2 5.68629 2 9C2 13.8365 6.97858 18.511 11.5783 21.2383C11.8112 21.3828 12.1924 21.3809 12.4246 21.2363C16.994 18.5 22 13.8362 22 9C22 5.68629 19.3137 3 16 3ZM12.0057 19.1333C7.06067 15.9005 4 12.1242 4 9C4 6.79086 5.79086 5 8 5C8.99954 5 9.93695 5.36538 10.6662 6.01806L11.6285 6.87932C11.8364 7.06548 12.1663 7.06298 12.3715 6.87932L13.3338 6.01806C14.0631 5.36538 15.0005 5 16 5C18.2091 5 20 6.79086 20 9C20 12.2045 16.9507 15.9005 12.0057 19.1333Z');
                mysvg.append(newPath);
                return mysvg;
        }
        if(type=='more'){
            mysvg.setAttribute('width','4');
            mysvg.setAttribute('height','16');
            mysvg.setAttribute('viewBox','0 0 4 16');
            mysvg.setAttribute('class', 'more');
            newPath.setAttribute('fill-rule', 'evenodd');
            newPath.setAttribute('clip-rule', 'evenodd');
            newPath.setAttribute('fill', '#A6CFE2');
            newPath.setAttribute('d', 'M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z');
            mysvg.append(newPath);
            return mysvg;
        }
    }
}
