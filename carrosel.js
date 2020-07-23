const project = document.querySelector('.project-content div');
const content = document.querySelector('.project-content');
const antbtn = document.querySelector('.ant-btn');
const probtn = document.querySelector('.pro-btn');

let counter = 0;
const childproject = content.children
const size = content.children[0].clientWidth + 270;
console.log(size)


probtn.addEventListener('click', () => {

    if (counter === 2) {

        return null;
    }

    content.style.transition = "transform 0.4s ease-in";
    counter++;
    content.style.transform = 'translateX(' + (-33 * counter) + '%)';
})
antbtn.addEventListener('click', () => {
    if (counter === 0) {
        return null
    }
    content.style.transition = "transform 0.4s ease-in";
    counter--;
    content.style.transform = 'translateX(' + (-33 * counter) + '%)';
})