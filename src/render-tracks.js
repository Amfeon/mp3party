export default class RenderTracks {
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
      //this.renderTracks.bind(this);
        this.playlist.forEach((item)=>{
            console.log(item);
            item.addEventListener('click', this.renderTracks.bind(this));
        })
    //   if(this.playlist.dataset.playlistId)
    //     this.playlistId = this.playlist.dataset.playlistId; //получаем id плейлиста для дальнейшей подгрузки треков
    //     console.log (plalistId," this is IdPlaylist");
     

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






    renderTracks(){       
        console.log(this)
       this.playlistBody.innerHTML='';
        for(let i = 0; i< this.trackMass.length; i++){
            const trackItem     =   document.createElement('div');
            const trackLogo     =   document.createElement('div');
            const trackImg      =   document.createElement('img');
            const trackBody     =   document.createElement('div');
            const trackTitle    =   document.createElement('div');
            const trackAuthor   =   document.createElement('div');     
            const trackInfo     =   document.createElement('div');    
            const trackTime     =   document.createElement('div');  
            const trackSize     =   document.createElement('div');  
            const trackBitrate  =   document.createElement('div');  
            trackItem.dataset.songId = this.trackMass[i].id;
            trackItem.classList.add('track-item');
            trackLogo.classList.add('track__logo');
            trackBody.classList.add('track-body');
            trackTitle.classList.add('track__title');
            trackAuthor.classList.add('track__author');
            trackInfo.classList.add('track-info');

            trackTime.classList.add('track__time');
            trackSize.classList.add('track__size');
            trackBitrate.classList.add('track__bitrate');

            trackTime.innerHTML     =    this.trackMass[i].time;
            trackSize.innerHTML     =   `${this.trackMass[i].size} Мб`;
            trackBitrate.innerHTML  =   `${this.trackMass[i].bitrate} Кб/с`;

            trackInfo.append(trackTime, trackSize ,trackBitrate);

            trackImg.setAttribute("src", this.trackMass[i].logo);
            trackTitle.innerHTML = this.trackMass[i].title;
            trackAuthor.innerHTML = this.trackMass[i].author;
            trackBody.append(trackTitle, trackAuthor, trackInfo);
            trackLogo.append(trackImg);
            trackItem.append(trackLogo, trackBody );
            this.playlistBody.append(trackItem);

        }

    }

    renderPlaylist(){
        const body =document.querySelector('.other-playlist');
        body.innerHTML = '';        
        for(let i = 0; i< this.playlistMass.length; i++){
            const plItem     =   document.createElement('div');
            const plIcon     =   document.createElement('div');
            const plBody     =   document.createElement('div');
            const plTitle    =   document.createElement('div');
            const plCount    =   document.createElement('div');
            plItem.classList.add('other-playlist-item');
            plIcon.classList.add('item__icon');
            plBody.classList.add('item__body');
            plTitle.classList.add('item__title');
            plCount.classList.add('item__count');
            plItem.addEventListener('click', this.renderTracks.bind(this));
            plTitle.innerText = this.playlistMass[i].title;
            plCount.innerText = this.playlistMass[i].trackCount;
            plBody.append(plTitle, plCount)
            plItem.append(plIcon,plBody)
            body.append(plItem);
        }        
    }
}