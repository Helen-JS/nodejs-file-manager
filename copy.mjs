import {copyFile} from 'fs/promises';
import {existsSync} from 'fs';
import readline from "readline";

export let filePath = '';
export let fileCopyPath = '';

const rl = readline.createInterface({
    input: process.stdin
});

rl.on('line', async (input) => {
    switch (input.trim()) {
        case input.trim():
            let arr = input.split(/(\s+)/);
            filePath = arr[2];
            fileCopyPath = arr[4];
            break;
        default:
            console.log('Invalid input!');
            break;
    }
});

export const copy = async () => {
    if (!existsSync(filePath) || existsSync(fileCopyPath)) {
        throw new Error('Operation failed');
    }

    await copyFile(filePath, fileCopyPath);
    console.log(`File has been copied to ${fileCopyPath}`);
    console.log(`You are currently in ${process.cwd()}`);
};
