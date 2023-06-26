let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === "=") {
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML === "√") {
            string = Math.sqrt(string);
            input.value = string;
        } else if (e.target.innerHTML === "AC") {
            string = "";
            input.value = string;
        }else if (e.target.innerHTML === "C") {
            string = string.slice(0, -1); // Remove the last character
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});