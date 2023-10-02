const initialValueInput = document.getElementById("initialValue");
const finalValueInput = document.getElementById("finalValue");
const generateButton = document.getElementById("generateButton");

generateButton.addEventListener("click", function () {
    const initialValue = parseInt(initialValueInput.value);
    const finalValue = parseInt(finalValueInput.value);

    const randomNumber = Math.floor(Math.random() * (finalValue - initialValue + 1)) + initialValue;
    const binaryNumber = randomNumber.toString(2);

    console.log(`El decimal es: ${randomNumber}, transformado a binario: ${binaryNumber}`);
});
