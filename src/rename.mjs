import { rename as renameFile } from 'fs/promises';
import { existsSync } from 'fs';
import readline from "readline";
import {fileCopyPath} from "../copy.mjs";

export let wrongFilenamePath = '';
export let properFilenamePath = '';

const rl = readline.createInterface({
    input: process.stdin
});

rl.on('line', async (input) => {
    switch (input.trim()) {
        case input.trim():
            let arr = input.split(/(\s+)/);
            wrongFilenamePath = arr[2];
            properFilenamePath = arr[4];
            break;
        default:
            console.log('Invalid input!');
            break;
    }
});

export const rename = async () => {
    if (!existsSync(wrongFilenamePath) || existsSync(properFilenamePath)) {
        throw new Error('Operation failed');
    }

    await renameFile(wrongFilenamePath, properFilenamePath);
    console.log('File has been renamed!');
    console.log(`You are currently in ${process.cwd()}`);
};
