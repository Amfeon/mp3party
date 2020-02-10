import createSVG from './createSVG';
import PlaylistMenu from './new-playlist-menu';
let menu = new PlaylistMenu();
export default class RenderTracks {
    constructor(title){
        console.log('in construcor');
        this.title=title;
        this.trackMass = [
            {
                id : "10",
                title: "Нaзвание трека",
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
    }
    renderHTML(){
        const body = document.getElementById('playlist-body');
        const playlist      =   this.createDiv('current-playlist');
        const playlistHeader =  this.createDiv('playlist-header');
        const headerBack    =   this.createDiv('header__back');
        const headerTitle   =   this.createDiv('header__title');
        const headerIcon    =   this.createDiv('header__icon') ;
        headerTitle.innerText = this.title;
        headerBack.append(createSVG('back'));
        headerIcon.append(createSVG('edit'));
        playlistHeader.append(headerBack, headerTitle, headerIcon);
        const playlistBody  =   this.createDiv("playlist-body");
        playlistBody.append(this.renderTracks()); 
        playlist.append(playlistHeader, playlistBody);
        body.append(playlist);
    }

    renderTracks(){       
     //   this.playlistBody.innerHTML='';
            const fragment = new DocumentFragment();
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
             const trackIcons    =   document.createElement('div');  
             const star          =   createSVG('star');
             const more          =   createSVG('more');
             star.addEventListener('click', ()=>{
                 console.log('star');
             })
             more.addEventListener('click', menu.addToPlayList)
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
 
             trackIcons.classList.add('track-icons');
 
             trackTime.innerHTML     =    this.trackMass[i].time;
             trackSize.innerHTML     =   `${this.trackMass[i].size} Мб`;
             trackBitrate.innerHTML  =   `${this.trackMass[i].bitrate} Кб/с`;
 
             trackInfo.append(trackTime, trackSize ,trackBitrate);
 
             trackImg.setAttribute("src", this.trackMass[i].logo);
             trackTitle.innerHTML = this.trackMass[i].title;
             trackAuthor.innerHTML = this.trackMass[i].author;

             trackIcons.append(star, more);
             trackBody.append(trackTitle, trackAuthor, trackInfo);
             trackLogo.append(trackImg);
             trackItem.append(trackLogo, trackBody, trackIcons);
             fragment.append(trackItem); 
         }
         return fragment;
 
     }
    createDiv(className){
        const elem = document.createElement('div');
        elem.classList.add(className);
        return elem;
    }

}
