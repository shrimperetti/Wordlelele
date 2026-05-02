import init, {get_new_word, check_input} from "./rust_wordle.js"

let w_to_guess;
const input_str = document.getElementById("input_str");

window.onload = async () => {
    // get the word to find
    // show the input_container div
    await init();
    w_to_guess = get_new_word();
};

export function check_attempt() {
    console.debug("received attempt: ");
    console.debug(input_str);
    let check_result = check_input(input_str.value, w_to_guess);
    console.debug("received result: ");
    console.debug(check_result);
    let result_obj = JSON.parse(check_result);
    console.debug("parsed result: " + result_obj);
}