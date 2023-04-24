class CryptoLib{

    static _vector = CryptoJS.lib.WordArray.random(16);

    static encrypt(cryptoMethod, des_modes, text, key){
        switch (des_modes) {
            case "CBC":
                return CryptoLib._encrypt(cryptoMethod, text, key, CryptoJS.mode.CBC);
            case "CFB":
                return CryptoLib._encrypt(cryptoMethod, text, key, CryptoJS.mode.CFB);
            case "CTS":
                return CryptoLib._encrypt(cryptoMethod, text, key, CryptoJS.mode.CTR);
            case "ECB":
                return CryptoLib._encrypt(cryptoMethod, text, key, CryptoJS.mode.ECB);
            case "OFB":
                return CryptoLib._encrypt(cryptoMethod, text, key, CryptoJS.mode.OFB);
        }
    }

    static decrypt(cryptoMethod, des_modes, text, key){
        switch (des_modes) {
            case "CBC":
                return CryptoLib._decrypt(cryptoMethod, text, key, CryptoJS.mode.CBC);
            case "CFB":
                return CryptoLib._decrypt(cryptoMethod, text, key, CryptoJS.mode.CFB);
            case "CTS":
                return CryptoLib._decrypt(cryptoMethod, text, key, CryptoJS.mode.CTR);
            case "ECB":
                return CryptoLib._decrypt(cryptoMethod, text, key, CryptoJS.mode.ECB);
            case "OFB":
                return CryptoLib._decrypt(cryptoMethod, text, key, CryptoJS.mode.OFB);
        }
    }

    static _encrypt(cryptoMethod, text, key, cryptoMode){
        const encrypted = cryptoMethod.encrypt(text, key, { mode: cryptoMode, iv: CryptoLib._vector });
        return encrypted.toString();
    }
    
    static _decrypt(cryptoMethod, text, key, cryptoMode){
        const decrypted = cryptoMethod.decrypt(text, key, { mode: cryptoMode, iv: CryptoLib._vector });
        return decrypted.toString(CryptoJS.enc.Utf8);
    }
}
