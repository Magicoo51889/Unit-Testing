import * as promptSync from 'prompt-sync'
const prompt = promptSync();

export function add(a:number, b:number){
    let c:number = a+b
    return c
};

add(2,7);