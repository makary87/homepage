import tax, { calculate as superCalculate, myFAvouriteColour } from "./modul-8-lekcja-3";
import * as importAll from "./modul-8-lekcja-3";
import differenceIndDays from 'date-fns/differenceInDays'

// alert('WTF z main.js');
// console.log(blad);
console.log('Log z main.js');

const birthYear = 1987
const firstName = 'Michal';
console.log('Imie to: ' + firstName + ' born in ' + birthYear);
console.log(`Imie to: ${firstName} born in ${birthYear}`);

// Modul 4 lekcja 11
const header = document.querySelector('.page-header__heading--js');
header.innerHTML = 'Nowa tresc'
console.log(header)

console.log(header.style)
header.style.color = 'blue'; // do modyfikacji CSS za pomoca JS

// Modul 4 - praca domowa
const divElement = document.querySelector('.section__div--js')
divElement.innerHTML = 'Modul 4 - praca domowa';
divElement.style.color = 'orange';
divElement.style.border = 'solid'
divElement.style.borderColor = 'red'
divElement.style.background = 'black';
divElement.style.height = '200px';
divElement.style.fontSize = '40px';
divElement.style.padding = '50px';

// Modul 5 lekcja 6 (funkcje)
function tradycyjnaSkladnia(parametr1, parametr2) {
    return parametr1 * parametr2;
} 
console.log('Wynik mnozenia 2 * 6: ' + tradycyjnaSkladnia(2,6));

const arrowSkladnia = (parametr1, parametr2) => {
    return parametr1 * parametr2 
}
console.log('Wynik mnozenia 3 * 6: ' + arrowSkladnia(3,6));

const arrowSkladniaSkrocona = parametr => (parametr*parametr);
console.log('Wynik mnozenia 3 * 3: ' + arrowSkladniaSkrocona(3));

// Modul 5 lekcja 7 (obiekty)
const nazwaObiektu = {
    nazwaProperty1: 'wartoscProperty1',
    nazwaProperty2: 'wartoscProperty2',
    propertyJakoFunkcja: (parametr) => (console.log('Wywolano funkcje z obiektu z paramerem: ' + parametr)),
    propertyJakoObiekt: {
        nazwaProperty1: 'wartoscProperty1',
        nazwaProperty2: 'wartoscProperty2',
    }
}

console.log('Pobranie property za pomoca dod notation: ' + nazwaObiektu.nazwaProperty1)
console.log('Pobranie property za pomoca [ ] notation: ' + nazwaObiektu['nazwaProperty2'])
console.log('Wywolanie funkcji property: ')
nazwaObiektu.propertyJakoFunkcja('przykladowyParamer')

// Modul 6 lekcja 12 (eventy)
const button = document.querySelector('.modul-6-lekcja-12__button--js');
console.log(button);

const clickFunction = (e) => {
    console.log(e)
    console.log("klik klik ")
    const header = document.querySelector('.modul-6-lekcja-12__header-h3--js')
    console.log(header);
    header.innerHTML = 'Nowa wartość nagłówka';
}
button.addEventListener('click', clickFunction);

// Modul 6 lekcja 13 (hamburger menu)
button.classList.add('testowa')
console.log(button.classList)
console.log(button.classList.contains('testowa'))

button.classList.toggle('testowa')
console.log(button.classList)
console.log(button.classList.contains('testowa'))

button.classList.toggle('testowa')
console.log(button.classList)
console.log(button.classList.contains('testowa'))

// const hamburger = document.querySelector('.modul-6-lekcja-13__hamburger--js')
// console.log(hamburger)
// hamburger.addEventListener('click', () => {
//     const navigation = document.querySelector('.modul-6-lekcja-13__navigation--js')
//     navigation.classList.toggle('modul-6-lekcja-13__navigation--open')
// })

// Modul 8 lekcja 3
const calculate = () => 'claculate';
console.log("Calcuate: " + calculate());
console.log("Calcuate: " + superCalculate(5));
console.log("Ulubiony kolor: " + myFAvouriteColour);
console.log("Wysokość podatku: " + tax);

console.log("Calcuate (*): " + importAll.calculate(5));
console.log("Ulubiony kolor (*): " + importAll.myFAvouriteColour);
console.log("Wysokość podatku (*): " + tax);

// Modul 8 lekcja 4
const differenceIndDaysResult = differenceIndDays(
    new Date(2022, 4, 23, 0, 0),
    new Date(2023, 7, 26, 0 ,0 )
)
console.log('differenceIndDaysResult ' + differenceIndDaysResult)

// Modul 8 lekcja 7
const button_modul_8_lekcja_7 = document.querySelector('.modul-8-lekcja-7__button--js');
button_modul_8_lekcja_7.addEventListener('click', (e) => {
    document.documentElement.style.setProperty('--kolorTla', 'black');
})
