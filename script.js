var openFileElem = document.getElementById('open');
var createFileElem = document.getElementById('create');
var encryptFileElem = document.getElementById('encrypt');
var decryptFileElem = document.getElementById('decrypt');
var infoElem = document.getElementById('info');
var input = document.getElementById('imgupload');
var textarea = document.getElementById("textbox");
var ciphers = document.getElementById("ciphers");
var xorGenerate = document.getElementById("generate");
var caesarShift = document.getElementById("caesar_shift");
var trithemiusTypes = document.getElementById("trithemiusTypes");
var inputLinear = document.getElementById("linearValues");
var inputWord = document.getElementById("wordLable");
var valueA = document.getElementById("A");
var valueB = document.getElementById("B");
var valueC = document.getElementById("C");
var valueWord = document.getElementById("Word");
var desModes = document.getElementById("des_modes");

function selectCipher(value){
    switch (value) {
        case 'caesar':
            caesarShift.style.display = "flex";
            trithemiusTypes.style.display = "none";
            inputLinear.setAttribute("hidden", true);
            inputWord.setAttribute("hidden", true);
            desModes.setAttribute("hidden", true);
            xorGenerate.setAttribute("hidden", true);
            break;
    
        case 'trithemius':
            caesarShift.style.display = "none";
            trithemiusTypes.style.display = "flex";
            inputLinear.removeAttribute("hidden");
            inputWord.setAttribute("hidden", true);
            desModes.setAttribute("hidden", true);
            xorGenerate.setAttribute("hidden", true);
            break;
    
        case 'xor':
            caesarShift.style.display = "none";
            trithemiusTypes.style.display = "none";
            inputLinear.setAttribute("hidden", true);
            desModes.setAttribute("hidden", true);
            inputWord.removeAttribute("hidden");
            xorGenerate.removeAttribute("hidden");
            break;
            
        case 'des' || 'tdes' || 'aes':
            caesarShift.style.display = "none";
            trithemiusTypes.style.display = "none";
            inputLinear.setAttribute("hidden", true);
            desModes.removeAttribute("hidden");
            inputWord.removeAttribute("hidden");
            xorGenerate.setAttribute("hidden", true);
            break;
    }
};

function selectTrithemiusTypes(value){
    if(value == "linear" || value == "non-linear"){
        inputLinear.removeAttribute("hidden");
        inputWord.setAttribute("hidden", true);
    }
    else {
        inputLinear.setAttribute("hidden", true);
        inputWord.removeAttribute("hidden");
    }
};

input.addEventListener('change', (event) => {
    if (event.target.files.length > 0) {
        const file = event.target.files[0];
        var reader = new FileReader();
        document.querySelector('input.filePath').value = file.name;
        if (file.type.includes("text/plain")) {
            reader.readAsText(file, "UTF-8");
            reader.onload = function (evnt) {
                textarea.value = evnt.target.result;
            }
        }
        else {
            reader.readAsDataURL(file);
            reader.onload = function (evnt) {
                let text = evnt.target.result;
                textarea.value = text.replace(text.split(',')[0] + ',', '');
            }
        }
        reader.onerror = function (evnt) {
            textarea.value = "error reading file";
        }
    }
});

function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

function open_file(){
    input.click();
    openFileElem.src = "icons\\OpenFile Red.svg"
    createFileElem.src = "icons\\CreateFile.svg"
    encryptFileElem.src = "icons\\Encrypt.svg"
    decryptFileElem.src = "icons\\Decrypt.svg"
    infoElem.src = "icons\\Info.svg"
}

function create_file(){
    createFileElem.src = "icons\\CreateFile Red.svg"
    openFileElem.src = "icons\\OpenFile.svg"
    encryptFileElem.src = "icons\\Encrypt.svg"
    decryptFileElem.src = "icons\\Decrypt.svg"
    infoElem.src = "icons\\Info.svg"
    download(document.getElementById('textbox').value, document.querySelector('input.filePath').value, "txt");
}

function encrypt_file(){
    encryptFileElem.src = "icons\\Encrypt Red.svg"
    openFileElem.src = "icons\\OpenFile.svg"
    createFileElem.src = "icons\\CreateFile.svg"
    decryptFileElem.src = "icons\\Decrypt.svg"
    infoElem.src = "icons\\Info.svg"
    switch (ciphers.value) {
        case "caesar":
            textarea.value = Caesar.encrypt(textarea.value, Number(caesarShift.value));
            break;
        case "trithemius":
            switch (trithemiusTypes.value) {
                case "linear":
                    textarea.value = Trithemius.encryptByLinear(textarea.value, Number(valueA.value), Number(valueB.value));
                    break;
                case "non-linear":
                    textarea.value = Trithemius.encryptByNonLinear(textarea.value, Number(valueA.value), Number(valueB.value), Number(valueC.value));
                    break;
                case "word":
                    textarea.value = Trithemius.encryptByWord(textarea.value, valueWord.value);
                    break;
            }
            break;
        case "xor":
            textarea.value = XOR.encryptASCII(textarea.value, valueWord.value);
            break;
        case "des":
            textarea.value = CryptoLib.encrypt(CryptoJS.DES, des_modes.value, textarea.value, valueWord.value);
            break;
        case "tdes":
            textarea.value = CryptoLib.encrypt(CryptoJS.TripleDES, des_modes.value, textarea.value, valueWord.value);
            break;
        case "aes":
            textarea.value = CryptoLib.encrypt(CryptoJS.AES, des_modes.value, textarea.value, valueWord.value);
            break;
    }
}

function decrypt_file(){
    openFileElem.src = "icons\\OpenFile.svg"
    createFileElem.src = "icons\\CreateFile.svg"
    encryptFileElem.src = "icons\\Encrypt.svg"
    decryptFileElem.src = "icons\\Decrypt Red.svg"
    infoElem.src = "icons\\Info.svg"
    switch (ciphers.value) {
        case "caesar":
            textarea.value = Caesar.decrypt(textarea.value, Number(caesarShift.value));
            break;
        case "trithemius":
            switch (trithemiusTypes.value) {
                case "linear":
                    textarea.value = Trithemius.decryptByLinear(textarea.value, Number(valueA.value), Number(valueB.value));
                    break;
                case "non-linear":
                    textarea.value = Trithemius.decryptByNonLinear(textarea.value, Number(valueA.value), Number(valueB.value), Number(valueC.value));
                    break;
                case "word":
                    textarea.value = Trithemius.decryptByWord(textarea.value, valueWord.value);
                    break;
            }
            break;
        case "xor":
            textarea.value = XOR.encryptASCII(textarea.value, valueWord.value);
            break;
        case "des":
            textarea.value = CryptoLib.decrypt(CryptoJS.DES, des_modes.value, textarea.value, valueWord.value);
            break;
        case "tdes":
            textarea.value = CryptoLib.decrypt(CryptoJS.TripleDES, des_modes.value, textarea.value, valueWord.value);
            break;
        case "aes":
            textarea.value = CryptoLib.decrypt(CryptoJS.AES, des_modes.value, textarea.value, valueWord.value);
            break;
    }
}

function show_info(){
    infoElem.src = "icons\\Info Red.svg"
    createFileElem.src = "icons\\CreateFile.svg"
    encryptFileElem.src = "icons\\Encrypt.svg"
    decryptFileElem.src = "icons\\Decrypt.svg"
    openFileElem.src = "icons\\OpenFile.svg"
    alert("Author: Mariia Larykova 122m-22-2");
}

function close_app(){
    openFileElem.src = "icons\\OpenFile.svg"
    createFileElem.src = "icons\\CreateFile.svg"
    encryptFileElem.src = "icons\\Encrypt.svg"
    decryptFileElem.src = "icons\\Decrypt.svg"
    infoElem.src = "icons\\Info.svg"
    if (confirm("Close Window?")) {
        window.close();
    }
}

function generate(){
    valueWord.value = XOR.generateKey(textarea.value.langht > 0? textarea.value.langht + 10 : 10);
}
