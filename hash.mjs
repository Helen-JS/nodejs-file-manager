import * as crypto from 'crypto';
import * as fs from 'fs';
import readline from "readline";

export let fileForHash = '';

const rl = readline.createInterface({
    input: process.stdin
});

rl.on('line', async (input) => {
    switch (input.trim()) {
        case input.trim():
            let arr = input.split(/(\s+)/);
            fileForHash = arr[2];
            break;
        default:
            console.log('Invalid input!');
            break;
    }
});

export const calculateHash = async () => {
    const fileBuffer = fs.readFileSync(fileForHash);
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);

    const hex = hashSum.digest('hex');

    console.log(hex);
    console.log(`You are currently in ${process.cwd()}`);
};
