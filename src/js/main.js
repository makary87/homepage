import tax, { calculate as superCalculate, myFAvouriteColour } from "./modul-8-lekcja-3";
import * as importAll from "./modul-8-lekcja-3";
import differenceIndDays from 'date-fns/differenceInDays';
import dodawanie, {substractNumber as roznica} from './modul-8-praca-domowa';
import {arraySum} from './modul-9-praca-domowa';


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

// Modul 8 praca domowa
console.log("Wynik odejmowania: " + roznica(6,2));
console.log("Wynik dodawania: " + dodawanie(6,2));

// Modul 9 lekcja 4
for(let i = 0; i < 3; i++) { 
    console.log('Numer licznika: ' + i);    
}

let number = 0;
console.log("Postinkrementacja: " + number++); // 0
console.log("Wynik postinkrementacji: " + number); // 1

number = 0;
console.log("Preinkrementacja: " + ++number); // 1
console.log("Wynik preinkrementacji: " + number); // 1

while(number < 10) {
    console.log('while licznik: ' + number); 
    number = number + 3;
}

do {
    console.log('do while licznik: ' + number); 
    number = number - 3;
} while (number > 0)

const przykladObiektu = {
    property1: 'value1',
    property2: 'value2',
    property3: 'value3'
} 
for (property in przykladObiektu) {
    console.log("for in - property value: " + property + " and value: " + przykladObiektu[property]);
}

const przykladowaTablica = ['element1', 'element2', 'element3']
for (let element of przykladowaTablica) {
    console.log("for of: " + element)
}

// Modul 9 lekcja 6
const modul9lekcja6Object = {
    name: "Michal",
    hello: () => { console.log("Hello") },
    year: 1987,
    hobby: ['a', 'b', 'c']
}
console.log(modul9lekcja6Object)

const modul9lekcja6ObjectJSON = JSON.stringify(modul9lekcja6Object);
console.log(modul9lekcja6ObjectJSON);

const modul9lekcja6ObjectJS = JSON.parse(modul9lekcja6ObjectJSON);
console.log(modul9lekcja6ObjectJS)

// Modul 9 lekcja 7
document.cookie = 'ciastko = mniamnia'
document.cookie = 'ciastko2 = mniamnia2' // nie spowoduje nadpisania, a dodanie na kolejnego wpisu do istniejący cookie

const modul9lekcja7Object = {
    name: "Michal",
    year: 1987
}
localStorage.setItem('user', JSON.stringify(modul9lekcja7Object));
console.log(localStorage.getItem('user'));
console.log(JSON.parse(localStorage.getItem('user')));
localStorage.removeItem('user');

// Modul 9 praca domowa
const inputArray = [4, 6, 7];
console.log('Suma: ' + arraySum(inputArray))
