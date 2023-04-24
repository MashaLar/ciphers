class Trithemius {

    static encryptByLinear(text, a, b){
        let ciphertext = "";
        for (let i = 0; i < text.length; i++) {
          let x = text.charCodeAt(i) - 65; 
          let y = a * x + b; 
          ciphertext += String.fromCharCode(y + 65); 
        }
        return ciphertext;
    }

    static decryptByLinear(cipher, a, b){
        let plaintext = "";
        for (let i = 0; i < cipher.length; i++) {
          let y = cipher.charCodeAt(i) - 65; 
          let x = (y - b) / a; 
          plaintext += String.fromCharCode(x + 65);
        }
        return plaintext;
    }

    static encryptByWord(text, keyWord){
        var result = "";
        for (let i = 0; i < text.length; i++) {
            let upperCaseChar = text[i].toUpperCase();
            let upperCaseKey = keyWord[i > keyWord.length - 1 ? i % (keyWord.length - 1) : i].toUpperCase();
            if (Caesar._symbols[0].includes(upperCaseChar) && Caesar._symbols[0].includes(upperCaseKey)) {
                const shift = Caesar._symbols[0].indexOf(upperCaseKey);
                result += Caesar._encryptUpperCaseOrLower([text[i], upperCaseChar], shift, Caesar._symbols[0]);
            }
            else if (Caesar._symbols[1].includes(upperCaseChar) && Caesar._symbols[1].includes(upperCaseKey)) {
                const shift = Caesar._symbols[1].indexOf(upperCaseKey);
                result += Caesar._encryptUpperCaseOrLower([text[i], upperCaseChar], shift, Caesar._symbols[1]);
            }
            else {
                result += text[i];
            }
        }   
        return result;
    }

    static decryptByWord(text, key){
        var result = "";
        for (let i = 0; i < text.length; i++) {
            let upperCaseChar = text[i].toUpperCase();
            let upperCaseKey = key[i > key.lenght ? i % (key.lenght - 1) : i].toUpperCase();
            if (Caesar._symbols[0].includes(upperCaseChar) && Caesar._symbols[0].includes(upperCaseKey)) {
                const shift = Caesar._symbols[0].indexOf(upperCaseKey);
                result += Caesar._decryptUpperCaseOrLower([text[i], upperCaseChar], shift, Caesar._symbols[0]);
            }
            else if (Caesar._symbols[1].includes(upperCaseChar) && Caesar._symbols[1].includes(upperCaseKey)) {
                const shift = Caesar._symbols[1].indexOf(upperCaseKey);
                result += Caesar._decryptUpperCaseOrLower([text[i], upperCaseChar], shift, Caesar._symbols[1]);
            }
            else {
                result += text[i];
            }
        }   
        return result;
    }

    static encryptByNonLinear(text, a, b, c) {
        let ciphertext = "";
        for (let i = 0; i < text.length; i++) {
          let x = text.charCodeAt(i) - 65;
          let y = (a * x * x + b * x + c);
          ciphertext += String.fromCharCode(y + 65); 
        }
        return ciphertext;
      }
      
      static decryptByNonLinear(text, a, b, c) {
        let plaintext = "";
        for (let i = 0; i < text.length; i++) {
          let y = text.charCodeAt(i) - 65;
          let discriminant = (b * b - 4 * a * (c - y)); 
          let x1 = (-b + Math.sqrt(discriminant)) / (2 * a); 
          let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
          let x = (x1 >= 0 && x1 <= 25) ? x1 : x2; 
          plaintext += String.fromCharCode(x + 65); 
        }
        return plaintext;
      }
}
