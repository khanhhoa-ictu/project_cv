const opens = document.querySelectorAll('.open');
const closes = document.querySelectorAll('.closebtn');

opens.forEach(open=>{
    open.addEventListener('click',()=>{
        open.parentNode.classList.add('active')
    })
})

closes.forEach(close=>{
    close.addEventListener('click',()=>{
        close.parentNode.parentNode.parentNode.classList.remove('active')
    })
})
