const passDisplay = document.getElementById("displayPasswd");
const btn = document.getElementById("btnImg");
const incluNum = document.getElementById("numbers");
const incluSymbol = document.getElementById("symbols");
const incluUper = document.getElementById("uppercase");
const range = document.getElementById("iputId");

const lowerArray = arraygenerator(65,90);
const upperArray = arraygenerator(97,122);
const numberArray= arraygenerator(48,57);
const symbolArray = arraygenerator(33,47).concat(arraygenerator(58,64)).concat(arraygenerator(91,96)).concat(arraygenerator(123,126));

 
btn.addEventListener("click", ()=>{
    const incluNumber = incluNum.checked
    const incluSymbols = incluSymbol.checked
    const incluUpercase = incluUper.checked
    const rangeAmount = range.value;
    const newPassword = generatePasswd(incluNumber,incluSymbols,incluUpercase,rangeAmount)

    passDisplay.innerHTML = newPassword;

 }
);


function generatePasswd(incluNumber,incluSymbols,incluUpercase,rangeAmount){
    let charCode = lowerArray;
    if (incluNumber) charCode = charCode.concat(numberArray);
    if (incluSymbols) charCode = charCode.concat(symbolArray);
    if (incluUpercase) charCode = charCode.concat(upperArray);

    const pswCharacter = [];
    for(let i = 0; i < rangeAmount; i++){
        const randomCharactere = charCode[Math.floor(Math.random() * charCode.length)];
        pswCharacter.push(String.fromCharCode(randomCharactere))
    }
    return pswCharacter.join('');
}


function arraygenerator(from, to){
    const array = []
    for(let i = from; i <= to; i++){
        array.push(i);
    }
    return array;
}