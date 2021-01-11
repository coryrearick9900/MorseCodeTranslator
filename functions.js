

// Morse Code HashMap
// 0 = DOT, 1 = Dash
let HashMap = new Map();
HashMap.set('a', {pattern:'01'});
HashMap.set('b', {pattern:'1000'});
HashMap.set('c', {pattern:'1010'});
HashMap.set('d', {pattern:'100'});
HashMap.set('e', {pattern:'0'});
HashMap.set('f', {pattern:'0010'});
HashMap.set('g', {pattern:'110'});
HashMap.set('h', {pattern:'0000'});
HashMap.set('i', {pattern:'00'});
HashMap.set('j', {pattern:'0111'});
HashMap.set('k', {pattern:'101'});
HashMap.set('l', {pattern:'0100'});
HashMap.set('m', {pattern:'11'});
HashMap.set('n', {pattern:'10'});
HashMap.set('o', {pattern:'111'});
HashMap.set('p', {pattern:'0110'});
HashMap.set('q', {pattern:'1101'});
HashMap.set('r', {pattern:'010'});
HashMap.set('s', {pattern:'000'});
HashMap.set('t', {pattern:'1'});
HashMap.set('u', {pattern:'001'});
HashMap.set('v', {pattern:'0001'});
HashMap.set('w', {pattern:'011'});
HashMap.set('x', {pattern:'1001'});
HashMap.set('y', {pattern:'1011'});
HashMap.set('z', {pattern:'1100'});
HashMap.set(' ', {pattern:'___'});

function translate() {
    let length = document.getElementById("inputbox").value.length;
    let input = document.getElementById("inputbox").value;
    let output = document.getElementById("outputbox");

    // Resets the output box to blank
    output.value = "";

    for(let i = 0; i < length; i++) {
        output.value += input.charAt(i);
    }




}
