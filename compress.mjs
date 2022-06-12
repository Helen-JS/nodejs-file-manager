import * as fs from 'fs';
import * as zlib from 'zlib';
import readline from "readline";
import { existsSync } from "fs";

export let fileToCompress = '';
export let fileCompressed = '';

const rl = readline.createInterface({
    input: process.stdin
});

rl.on('line', async (input) => {
    switch (input.trim()) {
        case input.trim():
            let arr = input.split(/(\s+)/);
            fileToCompress = arr[2];
            fileCompressed = arr[4];
            break;
        default:
            console.log('Invalid input!');
            break;
    }
});

export const compress = async () => {
    if (!existsSync(fileToCompress) || existsSync(fileCompressed)) {
        throw new Error('Operation failed');
    }

    const readStream = fs.createReadStream(fileToCompress);
    const writeStream = fs.createWriteStream(fileCompressed);

    const brotli = zlib.createBrotliCompress();

    const stream = readStream.pipe(brotli).pipe(writeStream);

    await stream.on('finish', () => {
        console.log('File has been compressed!');
        console.log(`You are currently in ${process.cwd()}`);
    });
};



