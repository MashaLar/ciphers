class Caesar {

    static _symbols = [
        ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
        ['А','Б','В','Г','Ґ','Д','Е','Є','Ж','З','И','І','Ї','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ь','Ю','Я']
    ]

    static encrypt(text, shift) {
        let result = '';
        for (const character of text) {
            let upperCaseChar = character.toUpperCase();
            if (this._symbols[0].includes(upperCaseChar)) {
                result += this._encryptUpperCaseOrLower([character, upperCaseChar], shift, this._symbols[0]);
            }
            else if (this._symbols[1].includes(upperCaseChar)) {
                result += this._encryptUpperCaseOrLower([character, upperCaseChar], shift, this._symbols[1]);
            }
            else {
                result += character;
            }
        }
        return result;
    }

    static decrypt(text, shift) {
        let result = '';
        for (const character of text) {
            let upperCaseChar = character.toUpperCase();
            if (this._symbols[0].includes(upperCaseChar)) {
                result += this._decryptUpperCaseOrLower([character, upperCaseChar], shift, this._symbols[0]);
            }
            else if (this._symbols[1].includes(upperCaseChar)) {
                result += this._decryptUpperCaseOrLower([character, upperCaseChar], shift, this._symbols[1]);
            }
            else {
                result += character;
            }
        }
        return result;
    }

    static _encryptUpperCaseOrLower(character, shift, alphabet) {
        if (character[0] == character[1]) {
            return this._chiper(character[1], shift, alphabet);
        }
        else {
            return this._chiper(character[1], shift, alphabet).toLowerCase();
        } 
    }

    static _decryptUpperCaseOrLower(character, shift, alphabet) {
        if (character[0] == character[1]) {
            return this._deChiper(character[1], shift, alphabet);
        }
        else {
            return this._deChiper(character[1], shift, alphabet).toLowerCase();
        } 
    }

    static _chiper (char, shift, alphabet) {
        const shiftedId = alphabet.indexOf(char) + shift;
        if(alphabet.length > shiftedId) return alphabet[shiftedId];
        else return alphabet[shiftedId % alphabet.length];
    }

    static _deChiper (char, shift, alphabet) {
        const shiftedId = alphabet.indexOf(char) - shift;
        if(shiftedId >= 0) return alphabet[shiftedId];
        else return alphabet[(alphabet.length) + (shiftedId % alphabet.length)];
    }

}    

// module.exports = Caesar;
