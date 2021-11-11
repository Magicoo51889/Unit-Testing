import { add } from './typescript/add';
const prompt = require('prompt-sync')();

var a:number = prompt("A: ")
var b = prompt("B: ")

add(a,b);