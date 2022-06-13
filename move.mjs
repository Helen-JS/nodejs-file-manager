import {copyFile} from 'fs/promises';
import { rm } from 'fs/promises';
import {existsSync} from 'fs';
import readline from "readline";

export let fileHomePath = '';
export let fileMovePath = '';

const rl = readline.createInterface({
    input: process.stdin
});

rl.on('line', async (input) => {
    switch (input.trim()) {
        case input.trim():
            let arr = input.split(/(\s+)/);
            fileHomePath = arr[2];
            fileMovePath = arr[4];
            break;
        default:
            console.log('Invalid input!');
            break;
    }
});

export const move = async () => {
    if (!existsSync(fileHomePath) || existsSync(fileMovePath)) {
        throw new Error('Operation failed');
    }

    await copyFile(fileHomePath, fileMovePath);
    await rm(fileHomePath);
    console.log(`File has been moved to ${fileMovePath}`);
    console.log(`You are currently in ${process.cwd()}`);
};
