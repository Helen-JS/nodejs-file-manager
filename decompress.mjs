import * as fs from 'fs';
import * as zlib from 'zlib';
import readline from "readline";
import { existsSync } from "fs";

export let fileToDecompress = '';
export let fileDecompressed = '';

const rl = readline.createInterface({
    input: process.stdin
});

rl.on('line', async (input) => {
    switch (input.trim()) {
        case input.trim():
            let arr = input.split(/(\s+)/);
            fileToDecompress = arr[2];
            fileDecompressed = arr[4];
            break;
        default:
            console.log('Invalid input!');
            break;
    }
});

export const decompress = async () => {
    if (!existsSync(fileToDecompress) || existsSync(fileDecompressed)) {
        throw new Error('Operation failed');
    }

    const readStream = fs.createReadStream(fileToDecompress);
    const writeStream = fs.createWriteStream(fileDecompressed);

    const brotli = zlib.createBrotliDecompress();

    const stream = readStream.pipe(brotli).pipe(writeStream);

    await stream.on('finish', () => {
        console.log('File has been decompressed!');
        console.log(`You are currently in ${process.cwd()}`);
    });
};
