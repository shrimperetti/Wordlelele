use wasm_bindgen::prelude::*;
use std::{iter::zip, vec};
use rand::prelude::{IndexedRandom};
use serde::ser::{Serialize, SerializeStruct};
use serde_repr::*;
use wasm_bindgen::JsValue;

/*
    Deployment steps:
        - compile it for wasm -> cargo build --target wasm32-unknown-unknown --release
        - translate to js package -> wasm-bindgen --target web  ./target/wasm32-unknown-unknown/release/rust_wordle.wasm   --out-dir ./web_src
        - serve the files -> sfz ./src/pkg/
*/

// https://serde.rs/enum-number.html
#[derive(Serialize_repr, Deserialize_repr, PartialEq, Debug, Clone, Copy)]
#[repr(u8)]
#[wasm_bindgen]
pub enum Colors {
    GREY = 0,
    YELLOW = 1,
    GREEN = 2,
}
// impl Serialize for Color {
//     fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
//         where
//             S: Serializer {
//         let mut s = serializer.serialize_unit_variant("Colors", 0, "GREY");
//         let mut s = serializer.serialize_unit_variant("Colors", 1, "YELLOW");
//         let mut s = serializer.serialize_unit_variant("Colors", 2, "GREEN");
//     }
// }

#[wasm_bindgen]
#[derive(Debug, Clone, Copy)]
pub struct ColoredLetter{
    pub color: Colors,
    pub letter: char,
}

#[wasm_bindgen]
impl ColoredLetter{

    #[wasm_bindgen(constructor)]
    pub fn new(color: Colors, letter: char) -> ColoredLetter {
        ColoredLetter {color, letter}
    }
}
impl Serialize for ColoredLetter {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
        where
            S: serde::Serializer {
        let mut s = serializer.serialize_struct("ColoredLetter", 2)?;
        s.serialize_field("color", &self.color)?;
        s.serialize_field("letter", &self.letter)?;
        s.end()
    }
}

// https://wasm-bindgen.github.io/wasm-bindgen/reference/types/boxed-slices.html
#[wasm_bindgen]
pub fn check_input(input_str: &str, correct_word: &str) -> JsValue {
    let mut result: Vec<ColoredLetter> = vec![];
    
    for (a, b) in zip(input_str.chars(), correct_word.chars()) {
        if a == b {
            result.push(ColoredLetter::new(Colors::GREEN, a));
        } else if correct_word.contains(a) {
            result.push(ColoredLetter::new(Colors::YELLOW, a));
        } else {
            result.push(ColoredLetter::new(Colors::GREY, a));
        }
    }

    serde_wasm_bindgen::to_value(&result).unwrap()
}
#[test]
fn test_check_input() {
    let result = check_input("mario", "mario");
    println!("{:?}", result);
}

fn get_word() -> String {
    let words = vec![ "mario", "aaa" ];
    words.choose(&mut rand::rng()).unwrap().to_string()
}

#[wasm_bindgen]
pub fn get_new_word() -> String {
    let new_w = get_word();
    new_w
}

fn main(){

}


// // Import the `window.alert` function from the Web.
// #[wasm_bindgen]
// extern "C" {
//     fn alert(s: &str);
// }