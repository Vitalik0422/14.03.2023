const block = document.querySelector('.block')
const tets = document.querySelectorAll('.tets')
let posValX = 0, posValY = 0;
let dogArr = [
    { dog: 1 },
    { dog: 2 },
    // {dog: 3},
    // {dog: 4}
]

let houseArr = [
    { house: 0, posValX: 0, posValY: 0 }
]

const renderDiv = () => {
    block.innerHTML = '';
    for (let i = 0; i < houseArr.length; i++) {
        houseArr[i].posValX = parseInt(Math.random() * 300)
        houseArr[i].posValY = parseInt(Math.random() * 1000)
        block.innerHTML += `<div class="house ${houseArr[i].dog}" style = "top:${houseArr[i].posValX}px; left:${houseArr[i].posValY}px"></div>`
    }
    for (let i = 0; i < dogArr.length; i++) {
        dogArr[i].posValX = parseInt(Math.random() * 300)
        dogArr[i].posValY = parseInt(Math.random() * 1000)
        block.innerHTML += `<div class="tets ${dogArr[i].dog}" style = "top:${dogArr[i].posValX}px; left:${dogArr[i].posValY}px"></div>`
    }
    return block.innerHTML;
}
renderDiv()

const controllDog = () => {
    const tets = document.querySelectorAll('.tets')
    console.log(tets.length)
    for (let i = 0; i < tets.length; i++) {

        tets[i].addEventListener('click', (ev) => {
            let posX = ev.pageX - tets[i].offsetLeft
            posY = ev.pageY - tets[i].offsetTop;
            let posValX = parseInt(tets[i].style.top), posValY = parseInt(tets[i].style.left);
            if (posX < 100 && posY < 100) {
                posValX += parseInt(Math.random() * 15);
                posValY += parseInt(Math.random() * 15);
                tets[i].style.top = posValX + 'px';
                tets[i].style.left = posValY + 'px';
            } else if (posX > 100 && posY < 100) {
                posValX += parseInt(Math.random() * 15);
                posValY -= parseInt(Math.random() * 15);
                tets[i].style.top = posValX + 'px';
                tets[i].style.left = posValY + 'px';
            } else if (posX < 100 && posY > 100) {
                posValX -= parseInt(Math.random() * 15);
                posValY += parseInt(Math.random() * 15);
                tets[i].style.top = posValX + 'px';
                tets[i].style.left = posValY + 'px';
            } else if (posX > 100 && posY > 100) {
                posValX -= parseInt(Math.random() * 15);
                posValY -= parseInt(Math.random() * 15);
                tets[i].style.top = posValX + 'px';
                tets[i].style.left = posValY + 'px';
            }
            dogArr[i].posValX = tets[i].offsetTop;
            dogArr[i].posValY = tets[i].offsetLeft;
            console.log(dogArr)
            rend(dogArr[i])
            rendInHouse(dogArr[i])
        })
    }
}
controllDog()

const rend = (value) => {
    const tets = document.querySelectorAll('.tets')
    for (let i = 0; i < dogArr.length; i++) {
        if (value == dogArr[i]) { }

        else if ((dogArr[i].posValX - 200) < value.posValX && (dogArr[i].posValX + 200) > value.posValX && (dogArr[i].posValY - 200) < value.posValY && (dogArr[i].posValY + 200) > value.posValY) {
            if (value.posValX < dogArr[i].posValX && value.posValY < dogArr[i].posValY) {
                dogArr[i].posValX += 15;
                dogArr[i].posValY += 15;
                tets[i].style.top = dogArr[i].posValX + 'px';
                tets[i].style.left = dogArr[i].posValY + 'px';
            } else if (value.posValX > dogArr[i].posValX && value.posValY > dogArr[i].posValY) {
                dogArr[i].posValX -= 15;
                dogArr[i].posValY -= 15;
                tets[i].style.top = dogArr[i].posValX + 'px';
                tets[i].style.left = dogArr[i].posValY + 'px';
            }
        }
        else {
            return;
        }
    }
}

const rendInHouse = (value) => {
        if ((houseArr[0].posValX - 100) < value.posValX && (houseArr[0].posValX + 100) > value.posValX && (houseArr[0].posValY - 100) < value.posValY && (houseArr[0].posValY + 100) > value.posValY) {
           console.log('собака в дома')
           const gameres = document.querySelector('.gamereset')
           gameres.classList.add('on')
        }
        else {
            return;
        }
}