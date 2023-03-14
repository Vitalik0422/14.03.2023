const block = document.querySelector('.block')
let posValX = 0, posValY = 0;


block.addEventListener('click', (ev) => {
    let posX = ev.clientX - block.offsetLeft, posY = ev.clientY - block.offsetTop
    if(posX<100&&posY<100){
        posValX += 10;
        posValY += 10;
        block.style.top = posValX+'px';
        block.style.left = posValY+'px';
    }
    if(posX>100&&posY<100){
        posValX += 10;
        posValY -= 10;
        block.style.top = posValX+ 'px';
        block.style.left =  posValY+ 'px';
    }
    if(posX<100&&posY>100){
        posValX -= 10;
        posValY += 10;
        block.style.top = posValX+ 'px';
        block.style.left =  posValY+ 'px';
    }
    if(posX>100&&posY>100){
        posValX -= 10;
        posValY -= 10;
        block.style.top = posValX+ 'px';
        block.style.left =  posValY+ 'px';
    }
    console.log(block.style.top)
})