class XOR {

    static encryptASCII(text, gamma){
        let result = "";
        for (let i = 0; i < text.length; i++) {
            const charBinary = text[i].charCodeAt();
            const gammaBinary = gamma[i > gamma.length - 1 ? i % (gamma.length - 1) : i].charCodeAt();
            result += String.fromCharCode(charBinary ^ gammaBinary);
        }   
        return result;
    }

    static generateKey(lenght){
        let result = "";
        for(let i = 0; i < lenght; i+=4){
            result += (Math.random() + 1).toString(36).substring(7);
        }
        return result;
    }

}

// module.exports = XOR 
