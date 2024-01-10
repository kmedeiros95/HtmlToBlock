import { convertHtmlToBlocks } from 'knowledge-html-converter';

console.log('mainJS')

document.querySelector('button').addEventListener('click', convert);

//const documentBodyBlocks = convertHtmlToBlocks('<html><body><p>Document content</p></body></html>');
//console.log(JSON.stringify(documentBodyBlocks));

var input = document.getElementById('htmlInput');
var output = document.getElementById('blockOutput');

export function convert(){
  console.log(input.value);
  var documentBodyBlocks = convertHtmlToBlocks(input.value);
  output.value = JSON.stringify(documentBodyBlocks);
}