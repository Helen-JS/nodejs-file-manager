//import { __dirname } from "./src/welcomebye.mjs";
import readline from "readline";
import { welcomeBye, goodbye, username, oneStepBack } from "./src/welcomebye.mjs";
import { list } from "./src/list.mjs";
import { read, fileToRead } from "./src/read.mjs";
import { create, newFile } from "./src/create.mjs";
import { rename, wrongFilenamePath, properFilenamePath } from "./src/rename.mjs";
import { copy, filePath, fileCopyPath } from "./copy.mjs";
import { remove, fileToBeDeletedPath } from "./delete.mjs";
import { move, fileHomePath, fileMovePath } from "./move.mjs";
import { calculateHash, fileForHash } from "./hash.mjs";
import { compress, fileCompressed, fileToCompress } from "./compress.mjs";
import { decompress, fileDecompressed, fileToDecompress } from "./decompress.mjs";

welcomeBye();

const rl = readline.createInterface({
    input: process.stdin
});

rl.on('line', async (input) => {
    switch (input.trim()) {
        case '.exit':
            goodbye(username);
            break;
        case 'up':
            console.log(`You are currently in ${oneStepBack}`);
            break;
        case 'ls':
            list();
            break;
        case `cat ${fileToRead}`:
            read();
            break;
        case `add ${newFile}`:
            create();
            break;
        case `rn ${wrongFilenamePath} ${properFilenamePath}`:
            rename();
            break;
        case `cp ${filePath} ${fileCopyPath}`:
            copy();
            break;
        case `rm ${fileToBeDeletedPath}`:
            remove();
            break;
        case `mv ${fileHomePath} ${fileMovePath}`:
            move();
            break;
        case `hash ${fileForHash}`:
            calculateHash();
            break;
        case `compress ${fileToCompress} ${fileCompressed}`:
            compress();
            break;
        case `decompress ${fileToDecompress} ${fileDecompressed}`:
            decompress();
            break;
        default:
            console.log('Invalid input!');
            console.log(`You are currently in ${process.cwd()}`);
            break;
    }
});
