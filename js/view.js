import { add, sub } from "./math.js";

const output = document.querySelector("#output");

document.querySelector("#add-button").addEventListener('click', () => {
    let value1 = +document.querySelector("#value1").value;
    let value2 = +document.querySelector("#value2").value;

    let result = add(value1, value2);
    output.textContent = result;
})

document.querySelector("#sub-button").addEventListener('click', () => {
    let value1 = +document.querySelector("#value1").value;
    let value2 = +document.querySelector("#value2").value;

    let result = sub(value1, value2);
    output.textContent = result;
})