// const rangeInput = document.getElementById('rangeInput');
// const outputDiv = document.getElementById('outputDiv');

// rangeInput.addEventListener('input', () => {
//   outputDiv.innerText = rangeInput.value;
// });
const rangeInput = document.getElementById('rangeInput');
const outputDiv = document.getElementById('outputDiv');
const kd2u = document.querySelector('.kd2u');
const customModal = document.getElementById('customModal');
const inputValue = document.getElementById('inputValue');

// Funkcja do aktualizacji wartości suwaka i zawartości diva kd2u
function updateValue(value) {
  rangeInput.value = value;
  outputDiv.querySelector('p').innerText = value;
}
///////////

function openModal() {
    customModal.style.display = 'block';
    customModal.style.zIndex = 1;
    inputValue.value = parseInt(outputDiv.innerText); // Zmieniamy z outputDiv.querySelector('p') na outputDiv
  }

  function changeValue() {
    const newValue = parseInt(inputValue.value);
    if (!isNaN(newValue) && newValue >= rangeInput.min && newValue <= rangeInput.max) {
      updateValue(newValue);
      customModal.style.display = 'none';
    }
  }

/////////

// Event listener dla suwaka
rangeInput.addEventListener('input', () => {
  updateValue(rangeInput.value);
});
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
const rangeInput2 = document.getElementById('rangeInput2');
const outputDiv2 = document.getElementById('outputDiv2');
const kd2u2 = document.querySelector('.kd2u2');
const customModal2 = document.getElementById('customModal2');
const inputValue2 = document.getElementById('inputValue2');

// Funkcja do aktualizacji wartości suwaka i zawartości diva kd2u
function updateValue2(value) {
  rangeInput2.value = value;
  outputDiv2.querySelector('p').innerText = value;
}
///////////

function openModal2() {
    customModal2.style.display = 'block';
    customModal2.style.zIndex = 1;
    inputValue2.value = parseInt(outputDiv2.innerText); // Zmieniamy z outputDiv.querySelector('p') na outputDiv
  }

  function changeValue2() {
    const newValue = parseInt(inputValue2.value);
    if (!isNaN(newValue) && newValue >= rangeInput2.min && newValue <= rangeInput2.max) {
      updateValue2(newValue);
      customModal2.style.display = 'none';
    }
  }

/////////

// Event listener dla suwaka
rangeInput2.addEventListener('input', () => {
  updateValue2(rangeInput2.value);
});

/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////

const kafpiDiv = document.querySelector('.kafpi');
const kafpiDiv2 = document.querySelector('.kafpii');
const buttonDiv = document.querySelector('.button');
const bmiWM = document.getElementById('bmiWM');
let czyMan = 0;

// Dodajemy obsługę zdarzenia kliknięcia na div kafpi (woman)
kafpiDiv.addEventListener('click', () => {
  // Zmieniamy styl div-a kafpi na opacity: 1;
  kafpiDiv.style.opacity = '1';
  kafpiDiv2.style.opacity = '0.2';

  // Pokazujemy div-a button
  buttonDiv.style.display = 'block';
  bmiWM.textContent = "Optymalne BMI to: 18,5 - 24,9.";
  czyMan = 0;
});
// Dodajemy obsługę zdarzenia kliknięcia na div kafpii (man)
kafpiDiv2.addEventListener('click', () => {
  // Zmieniamy styl div-a kafpi na opacity: 1;
  kafpiDiv2.style.opacity = '1';
  kafpiDiv.style.opacity = '0.2';

  // Pokazujemy div-a button
  buttonDiv.style.display = 'block';
  bmiWM.textContent = "Optymalne BMI to: 20,1 - 25,9.";
  czyMan = 1;
});



/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
/////////
// MOJE FUNKCJE

const wzrostUser = document.getElementById('rangeInput');
const wagaUser = document.getElementById('rangeInput2');
const infoWzrost = document.querySelector('.wzrost');
const infoWaga = document.querySelector('.waga');
const btnOblicz = document.getElementById('btnOblicz');
const infoDiv = document.querySelector('.info');
const bmiUser = document.querySelector('.bmi');
const infoOtylosc = document.querySelector('.infoOtylosc');
const colorP = document.getElementById('colorP');
const odMasa = document.getElementById('odMasa');
const doMasa = document.getElementById('doMasa');
let bmi = 0;

function obliczBmi(){
    const wagaa = parseInt(wagaUser.value);
    const wzrostt = parseInt(wzrostUser.value);
    // Dodatkowo sprawdź, czy wprowadzone dane są poprawne
    if (wagaa && wzrostt) {
        bmi = (wagaa / ((wzrostt / 100) * (wzrostt / 100)));
        bmiUser.textContent = bmi.toFixed(2); // Zaokrąglamy do dwóch miejsc po przecinku
    }
    else {
        bmiUser.textContent = 'Wprowadź prawidłowe dane';
    }

    if(bmi<16){
        infoOtylosc.textContent = "WYGŁODZENIE";
        colorP.style.color = "#d41b14";
    }
    else if(16 <= bmi && bmi < 16.9){
        infoOtylosc.textContent = "WYCHUDZENIE";
        colorP.style.color = "#d41b14";
    }
    else if(16.9 <= bmi && bmi < 18.5){
        infoOtylosc.textContent = "NIEDOWAGA";
        colorP.style.color = "#dddd21";

    }
    else if(18.5 <= bmi && bmi < 25){
        infoOtylosc.textContent = "WAGA PRAWIDŁOWA";
        colorP.style.color = "#36ba24";
    }
    else if(25 <= bmi && bmi < 30){
        infoOtylosc.textContent = "NADWAGA";
        colorP.style.color = "#dddd21";
    }
    else if(30 <= bmi && bmi < 35){
        infoOtylosc.textContent = "OTYŁOŚĆ I STOPNIA";
        colorP.style.color = "#d41b14";
    }
    else if(35 <= bmi && bmi < 39.99){
        infoOtylosc.textContent = "OTYŁOŚĆ II STOPNIA";
        colorP.style.color = "#d41b14";
    }
    else{
        infoOtylosc.textContent = "OTYŁOŚĆ III STOPNIA";
        colorP.style.color = "#d41b14";
    }


}
// function showDane(){
//     infoWzrost.textContent = wzrostUser.value;
//     infoWaga.textContent = wagaUser.value;
// }


function updateMasaCiala(wzrostt) {

    const wzrostMetry = wzrostt / 100;
    let masaCialaOd = 18.5 * wzrostMetry * wzrostMetry;
    let masaCialaDo = 24.9 * wzrostMetry * wzrostMetry;


      // Obliczenie zakresu masy ciała w zależności od wzrostu



  // Zakres masy ciała w zależności od wzrostu
//   let masaCialaOd = 20.1 + (wzrostt - 100) * 0.4;
//   let masaCialaDo = 25.9 + (wzrostt - 100) * 0.4;

  // Zaokrąglenie wartości do jednego miejsca po przecinku
  masaCialaOd = masaCialaOd.toFixed(1);
  masaCialaDo = masaCialaDo.toFixed(1);

  // Aktualizacja zawartości elementów
  odMasa.textContent = masaCialaOd;
  doMasa.textContent = masaCialaDo;
}
function updateMasaCialaMan(wzrostt) {

    const wzrostMetry = wzrostt / 100;
    let masaCialaOd = 20.1 * wzrostMetry * wzrostMetry;
    let masaCialaDo = 25.9 * wzrostMetry * wzrostMetry;


      // Obliczenie zakresu masy ciała w zależności od wzrostu



  // Zakres masy ciała w zależności od wzrostu
//   let masaCialaOd = 20.1 + (wzrostt - 100) * 0.4;
//   let masaCialaDo = 25.9 + (wzrostt - 100) * 0.4;

  // Zaokrąglenie wartości do jednego miejsca po przecinku
  masaCialaOd = masaCialaOd.toFixed(1);
  masaCialaDo = masaCialaDo.toFixed(1);

  // Aktualizacja zawartości elementów
  odMasa.textContent = masaCialaOd;
  doMasa.textContent = masaCialaDo;
}

function showDane() {
  infoWzrost.textContent = wzrostUser.value;
  infoWaga.textContent = wagaUser.value;
  const wzrostt = parseInt(wzrostUser.value);
  if(czyMan==0){
    updateMasaCiala(wzrostt);
  }
  else{
    updateMasaCialaMan(wzrostt);
  }
}






btnOblicz.addEventListener('click',()=>{
    infoDiv.style.display = 'flex';
    showDane();
    obliczBmi();
});