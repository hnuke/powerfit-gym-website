
function setDisplayElement(element){
    element.classList.toggle('invisible');
}

const ulMobile = document.querySelector('.tall-list');
document.querySelector('.hamburguer').addEventListener('click', () => {
    setDisplayElement(ulMobile);
})