import { rm } from 'fs/promises';
import { existsSync } from 'fs';
import readline from "readline";

export let fileToBeDeletedPath = '';

const rl = readline.createInterface({
    input: process.stdin
});

rl.on('line', async (input) => {
    switch (input.trim()) {
        case input.trim():
            let arr = input.split(/(\s+)/);
            fileToBeDeletedPath = arr[2];
            break;
        default:
            console.log('Invalid input!');
            break;
    }
});

export const remove = async () => {
    if (!existsSync(fileToBeDeletedPath)) {
        throw new Error('Operation failed');
    }

    await rm(fileToBeDeletedPath);
    console.log('File has been deleted!');
    console.log(`You are currently in ${process.cwd()}`);
};
