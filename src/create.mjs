import { appendFile } from 'fs/promises';
import { existsSync } from 'fs';
import { __dirname } from "./welcomebye.mjs";
import readline from "readline";

export let newFile = '';
let newFilePath = '';

const rl = readline.createInterface({
    input: process.stdin
});

rl.on('line', async (input) => {
    switch (input.trim()) {
        case input.trim():
            newFile = input.slice(4);
            newFilePath = `${__dirname}${newFile}`;
            break;
        default:
            console.log('Invalid input!');
            break;
    }
});

const fileContent = 'A new file has been created';

export const create = async () => {
    if (existsSync(newFilePath)) {
        throw new Error('Operation failed');
    }
    await appendFile(newFilePath, fileContent);
    console.log(`You are currently in ${process.cwd()}`);
};
