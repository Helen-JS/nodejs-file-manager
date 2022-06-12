import { welcomeBye, goodbye, username, oneStepBack } from "./src/welcomebye.mjs";
import { list } from "./src/list.mjs";
import readline from "readline";
import { fileToRead, read } from "./src/read.mjs";
//import { __dirname } from "./src/welcomebye.mjs";
import { create, newFile } from "./src/create.mjs";
import { wrongFilenamePath, properFilenamePath, rename } from "./src/rename.mjs";
import { filePath, fileCopyPath, copy } from "./copy.mjs";
import { fileToBeDeletedPath, remove } from "./delete.mjs";
import { fileHomePath, fileMovePath, move } from "./move.mjs";
import { fileForHash, calculateHash} from "./hash.mjs";

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
        default:
            console.log('Invalid input!');
            console.log(`You are currently in ${process.cwd()}`);
            break;
    }
});
