import {readFile} from 'fs/promises';
import {existsSync} from 'fs';
//import {__dirname} from "./welcomebye.mjs";
import readline from "readline";

export let fileToRead = '';
const rl = readline.createInterface({
    input: process.stdin
});

rl.on('line', async (input) => {
    switch (input.trim()) {
        case input.trim():
            let arr = input.split(/(\s+)/);
            fileToRead = arr[2];
            break;
        default:
            console.log('Invalid input!');
            break;
    }
});

export const read = async () => {
    if (!existsSync(fileToRead)) throw new Error('Operation failed');

    const fileContent = await readFile(fileToRead, {encoding: 'utf-8'});
    console.log(fileContent);
    console.log(`You are currently in ${process.cwd()}`);
};
