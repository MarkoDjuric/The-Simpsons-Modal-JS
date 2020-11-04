


const openBtn = document.getElementById('open-modal')
const modal = document.getElementById('overlay')
const h = document.getElementsByTagName('h1')[0]
const closeBtn = document.getElementById('close-modal')
const vid = document.getElementById("myVideo");


openBtn.addEventListener('click', ()=> {
    if(modal.style.display === 'none'){

        modal.style.display = 'block';
        vid.muted = false;
        vid.play()
        h.style.display = 'none';
        openBtn.style.display = 'none';
    }else{
        modal.style.display = 'none'
        h.style.display = 'block';
        openBtn.style.display = 'block';
    }
})

closeBtn.addEventListener('click', ()=>{
    if(h.style.display === 'none'){
        h.style.display = 'block';
        openBtn.style.display = 'block';
        openBtn.style.marginLeft = '770px';
        modal.style.display = 'none';
        vid.muted = true;
        vid.load()
    }else{
        modal.style.display = 'block'
        h.style.display = 'none';
        openBtn.style.display = 'none';
    }
})