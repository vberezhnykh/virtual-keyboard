import './index.html';
import './styles/styles.scss';

/* const body = document.getElementsByTagName(body);
console.log(body); */

document.body.innerHTML = `
<div class="body-wrapper">
<h1 class="header">Virtual Keyboard</h1>
</div>
<script src="index.js"></script>
`
const bodyWrapper = document.querySelector('.body-wrapper');
const textArea = document.createElement('textarea');
textArea.classList.add('textarea');
bodyWrapper.append(textArea);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
bodyWrapper.append(keyboard);

function createRow(i) {
    const keyboardRow = document.createElement('div');
    keyboardRow.classList.add('keyboard__row');
    keyboardRow.id = `row${i}`;
    keyboard.append(keyboardRow);
}

for (let i = 1; i <= 5; i++) {
    createRow(i);
}

const keycaps = {
    row: {
        1: ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
        2: ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
        3: ['Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
        4: ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift'],
        5: ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl']
    }
}

function createKey(rowNumber, keyNumber) {
    const key = document.createElement('button');
    key.classList.add('keyboard__key');
    if (keycaps.row[rowNumber][keyNumber] === 'Backspace' ||
        keycaps.row[rowNumber][keyNumber] === 'Tab' ||
        keycaps.row[rowNumber][keyNumber] === 'Del' ||
        keycaps.row[rowNumber][keyNumber] === 'Caps Lock' ||
        keycaps.row[rowNumber][keyNumber] === 'Enter' ||
        keycaps.row[rowNumber][keyNumber] === 'Shift' ||
        keycaps.row[rowNumber][keyNumber] === 'Ctrl' ||
        keycaps.row[rowNumber][keyNumber] === 'Win' ||
        keycaps.row[rowNumber][keyNumber] === 'Alt' ||
        keycaps.row[rowNumber][keyNumber] === '↑' ||
        keycaps.row[rowNumber][keyNumber] === '↓' ||
        keycaps.row[rowNumber][keyNumber] === '←' ||
        keycaps.row[rowNumber][keyNumber] === '→') {
            key.classList.add('keyboard__key--functional')
        };
    if (keycaps.row[rowNumber][keyNumber] === 'Backspace' ||
        keycaps.row[rowNumber][keyNumber] === 'Caps Lock' ||
        keycaps.row[rowNumber][keyNumber] === 'Enter' ||
        keycaps.row[rowNumber][keyNumber] === 'Shift') key.classList.add('keyboard__key--wide');
    if (keycaps.row[rowNumber][keyNumber] === 'Space') key.classList.add('keyboard__key--extra-wide');
    key.innerText = keycaps.row[rowNumber][keyNumber];
    const keyboardRow = document.getElementById(`row${rowNumber}`);
    keyboardRow.append(key);
}

for (let n = 1; n <= 5; n++) {
    for (let i = 0; i < keycaps.row[n].length; i++) {
        createKey(n, i);
    }
}