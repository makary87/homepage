// Modul 6 lekcja 14 (hamburger menu)
const hamburger = document.querySelector('.modul-6-lekcja-13__hamburger--js')
console.log(hamburger)
hamburger.addEventListener('click', () => {
    const navigation = document.querySelector('.modul-6-lekcja-13__navigation--js')
    navigation.classList.toggle('modul-6-lekcja-13__navigation--open')
})