



function setDisplayElement(element){
    element.classList.toggle('tall-list');
}

const ulMobile = document.querySelector('.tall-list');
document.querySelector('.hamburguer').addEventListener('click', () => {
    setDisplayElement(ulMobile);
})