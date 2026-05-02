import init, {get_new_word, check_input} from "./rust_wordle.js"

/*
Uncaught SyntaxError: await is a reserved identifier

la sssigla
Siignoooova
*/

let w_to_guess;
const input_str = document.getElementById("input_str");

window.onload = async () => {
    // get the word to find
    // show the input_container div
    await init();
    w_to_guess = get_new_word();
};

function check_attempt() {
    let check_result = check_input(input_str.value(), w_to_guess);
    console.debug("received result: " + check_result);
    let result_obj = JSON.parse(check_result);
    console.debug("parsed result: " + result_obj);
}