const appbox = document.querySelector('.app-box');
const appimg = document.querySelector('#app-img');
const first = document.querySelector('#first');
const second = document.querySelector('#second');
const third = document.querySelector('#third');
const background = document.querySelector('.background');
const tl = new TimelineMax();
const tl2 = new TimelineMax();
tl.fromTo(appbox, 0.6, { transform: 'translateY(-100px)' }, { transform: 'translateY(0px)' })
    .fromTo(appimg, 1, { opacity: 0.2 }, { opacity: 1, ease: Power2.easeInOut })
    .fromTo(first, 0.5, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut })
    .fromTo(second, 0.5, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut })

// .fromTo(appbox, 1.5, { transform: 'translateY(-10px)' }, { transform: 'translateY(0px)', opacity: 1 })
tl2.fromTo(background, 1.6, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut })

const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const emailValue = document.querySelector('#emailValue');
const telValue = document.getElementById('telValue');
const emailMsg = document.querySelector('#emailMsg');
const telMsg = document.querySelector('#telMsg');
email.addEventListener('click', () => {
    console.log('dioasjkdiasjd')
    emailValue.select();
    document.execCommand('copy');
    emailMsg.style.opacity = 1;
    setTimeout(() => {
        emailMsg.style.opacity = 0;
    }, 1200);
})
tel.addEventListener('click', () => {
    telValue.select();
    document.execCommand('copy');
    telMsg.style.opacity = 1;
    setTimeout(() => {
        telMsg.style.opacity = 0;
    }, 1200);
})