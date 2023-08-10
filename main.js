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
