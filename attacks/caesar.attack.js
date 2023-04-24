const _symbols = [
    ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    ['А','Б','В','Г','Ґ','Д','Е','Є','Ж','З','И','І','Ї','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ь','Ю','Я']
]

function attack(text){
    for (let index = 0; index < 32; index++) {
        let result = '';
        for (const character of text) {
            let upperCaseChar = character.toUpperCase();
            if (_symbols[0].includes(upperCaseChar)) {
                result += decryptUpperCaseOrLower([character, upperCaseChar], index, _symbols[0]);
            }
            else if (_symbols[1].includes(upperCaseChar)) {
                result += decryptUpperCaseOrLower([character, upperCaseChar], index, _symbols[1]);
            }
            else {
                result += character;
            }
        }
        console.log(result);
    }
}

function deChiper(char, shift, alphabet) {
    const shiftedId = alphabet.indexOf(char) - shift;
    if(shiftedId > 0) return alphabet[shiftedId];
    else return alphabet[(alphabet.length - 1) + (shiftedId % alphabet.length)];
}

function decryptUpperCaseOrLower(character, shift, alphabet) {
    if (character[0] == character[1]) {
        return deChiper(character[1], shift, alphabet);
    }
    else {
        return deChiper(character[1], shift, alphabet).toLowerCase();
    } 
}

const actual = '1234567890?!@#$()_+-&^%{}][/\\| абвгґджзклмнпрстфхцчшщаеєиіїоуюяьАБВГҐДЖЗКЛМНПРСТФХЦЧШЩАЕЄИІЇОУЮЯЬabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

attack(actual);
