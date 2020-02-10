function createSVG(type){
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
        if(type=='back'){
            mysvg.setAttribute('fill', '#100000');
            newPath.setAttribute('d', 'M8.70711 14.2929C9.09763 14.6834 9.09763 15.3166 8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071L0.292893 8.70711C-0.0976311 8.31658 -0.0976311 7.68342 0.292893 7.29289L7.29289 0.292893C7.68342 -0.0976315 8.31658 -0.0976315 8.70711 0.292893C9.09763 0.683417 9.09763 1.31658 8.70711 1.70711L2.41421 8L8.70711 14.2929Z');
            mysvg.append(newPath);
            return mysvg;
        }
        if(type=='edit'){
            mysvg.setAttribute('fill', '#A6CFE2');
            newPath.setAttribute('d', 'M21.2777 6.96638C22.0609 6.18317 22.0609 4.91815 21.2807 4.13792L19.8635 2.72076C19.0859 1.94318 17.8169 1.94186 17.0351 2.72374L7.13707 12.6217L6.20298 16.3443C5.93482 17.413 6.585 18.0675 7.65712 17.7985L11.3797 16.8644L21.2777 6.96638ZM4.00087 20L18 19.9969V13.0007C18 12.4484 18.4477 12.0007 19 12.0007C19.5523 12.0007 20 12.4484 20 13.0007V19.9969C20 21.1033 19.1075 22 17.9991 22H4.00087C2.89515 22 2 21.107 2 19.9991V6.00084C2 4.89442 2.89658 3.99996 4.00492 3.99996H11.0149C11.5672 3.99996 12.0149 4.44768 12.0149 4.99996C12.0149 5.55225 11.5672 5.99996 11.0149 5.99996L4 6.00084L4.00087 20ZM10.3483 15.0674L8.47385 15.5276L8.94318 13.645L9.61249 12.9758L11.0262 14.3895L10.3483 15.0674ZM16.328 6.25629L17.7422 7.67349L12.4404 12.9753L11.0268 11.5617L16.328 6.25629Z');
            mysvg.append(newPath);
            return mysvg;
        }
}
export default createSVG;


