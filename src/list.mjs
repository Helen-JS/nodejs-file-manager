import { readdir } from 'fs/promises';
import { existsSync } from 'fs';
//import { __dirname } from "./welcomebye.mjs";

const folderPath = './files';

export const list = async () => {
    if (!existsSync(folderPath)) throw new Error('Operation failed');

    const filesArray = await readdir(folderPath);

    for (const filename of filesArray) {
        console.log(filename);
    }
    console.log(`You are currently in ${process.cwd()}`);
};
