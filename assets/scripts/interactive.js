



function setDisplayElement(element){
    if (element.style.display !== "none"){
        element.style.display = 'none';
    }
    else{
        element.style.display = 'block';
    }
}

const ulMobile = document.querySelector('.tall-list');
document.querySelector('.hamburguer').addEventListener('click', () => {
    setDisplayElement(ulMobile);
})