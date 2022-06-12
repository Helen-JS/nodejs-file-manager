import { welcomeBye, goodbye, username, oneStepBack } from "./src/welcomebye.mjs";
import { list } from "./src/list.mjs";
import readline from "readline";
import { fileToRead, read } from "./src/read.mjs";
import { __dirname } from "./src/welcomebye.mjs";
import {create, newFile} from "./src/create.mjs";

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
        case 'list':
            list();
            break;
        case `cat ${fileToRead}`:
            read();
            break;
        case `add ${newFile}`:
            create();
            break;
        default:
            console.log('Invalid input!');
            console.log(`You are currently in ${process.cwd()}`);
            break;
    }
});
