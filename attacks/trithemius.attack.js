const symbols = [
    ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    ['А','Б','В','Г','Ґ','Д','Е','Є','Ж','З','И','І','Ї','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ь','Ю','Я']
]

function attack(encryptedText, decryptedText){
    let result = "";
    for (let i = 0; i < decryptedText.length; i++) {
        let upperCaseDecrypt = decryptedText[i].toUpperCase();
        let upperCaseEncrypt = encryptedText[i].toUpperCase();
        if (symbols[0].includes(upperCaseDecrypt) && symbols[0].includes(upperCaseEncrypt)) {
            const shift = symbols[0].indexOf(upperCaseDecrypt);
            result += decryptUpperCaseOrLower([encryptedText[i], upperCaseEncrypt], shift, symbols[0]);
        }
        else if (symbols[1].includes(upperCaseDecrypt) && symbols[1].includes(upperCaseEncrypt)) {
            const shift = symbols[1].indexOf(upperCaseDecrypt);
            result += decryptUpperCaseOrLower([encryptedText[i], upperCaseEncrypt], shift, symbols[1]);
        }
        else {
            result += text[i];
        }
    }   
    console.log(result);
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

attack("hfnosbuytm", "abcdeeghij");