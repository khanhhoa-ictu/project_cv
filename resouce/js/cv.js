const open = document.getElementById('open')
const close = document.getElementById('close')
const mobi_nav = document.querySelector('.mobi-navigation')

open.addEventListener('click', () => mobi_nav.classList.add('show-nav'))

close.addEventListener('click', () => mobi_nav.classList.remove('show-nav'))
/*=========================End Menu =========================*/

/*=========================carousel =========================*/
const carousels = document.getElementById('carousel');
const nextBtn = document.getElementById('Next');
const prevBtn = document.getElementById('Prev');
const item = document.querySelectorAll('#carousel .owl-stage');

let idx = 0
let interval = setInterval(run,3000)

function run(){
    idx++;
    changeImage();
}

function resetInterval(){
    clearInterval(interval);
    interval = setInterval(run, 3000);
}

nextBtn.addEventListener('click', () => {
    idx++;
    changeImage();
    resetInterval();
})
prevBtn.addEventListener('click', () => {
    idx--;
    changeImage();
    resetInterval();
})

function changeImage(){
    if(idx > item.length - 1)
    {
        idx = 0;
    }else if(idx < 0){
        idx = item.length - 1;
    }
    carousel.style.transform = `translateX(${-idx *572}px)`
}
/*========================= End carousel =========================*/

/*========================= EXPERIENCE =========================*/
const headers = document.querySelectorAll('.collapsible-header');

headers.forEach(header => {
    header.addEventListener('click',()=>{
        header.parentNode.classList.toggle('active');
    })
})
/*========================= End EXPERIENCE =========================*/

/*=========================  Skill =========================*/
const skills = document.getElementById('skills');

window.addEventListener('scroll', skillAnimation)
skillAnimation()

function skillAnimation() {
    const triggerBottom = window.innerHeight / 5 * 4

   
        const boxTop = skills.getBoundingClientRect().top;
        if(boxTop < triggerBottom) {
            skills.classList.add('active')
        }
}
/*========================= End Skill =========================*/