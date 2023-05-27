const selectElement = selector => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`you fucked up. make sure that the ${selector} even exists`)
}
const scrollHeader = () => {
    const headerElement = selectElement('#header')
    if (this.scrollY >= 15) {
        headerElement.classList.add('activated');

    }
    else {
        headerElement.classList.remove('activated');

    }
}
window.addEventListener('scroll', scrollHeader)
const menuToggleIcon = selectElement('#menu-toggle-icon');
const toggleMenu = () => {
    const mobilelMenu = selectElement('#menu');
    mobilelMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated')
}

menuToggleIcon.addEventListener('click', toggleMenu)

const formOpenBtn = selectElement('#search-icon');
const formcloseBtn = selectElement('#form-close-btn');
const searchFormContainer = selectElement('#search-form-container');

formOpenBtn.addEventListener('click', () =>
    searchFormContainer.classList.add('activated'));

formcloseBtn.addEventListener('click', () =>
    searchFormContainer.classList.remove('activated'));

window, addEventListener('keyup', event => {
    if (event.key === 'Escape')
        searchFormContainer.classList.remove('activated')

})

const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if (currentTheme) {
    bodyElement.classList.add('light-theme')
}

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-theme');

    if (bodyElement.classList.contains('light-theme')) {
        localStorage.setItem('currentTheme', 'themeActive');

    }
    else {
        localStorage.removeItem('currentTheme');
    }
})


const swiper = new Swiper('.swiper',
{
    slidesPerView: 1,
    spaceBetween: 20,
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination'
    }
})