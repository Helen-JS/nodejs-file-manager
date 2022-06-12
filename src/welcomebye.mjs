import {argv} from 'process';
import * as path from "path";
import {dirname} from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

export const goodbye = (name) => {
    console.log(`Thank you for using File Manager, ${name}!`);
    process.exit();
}

export let username = '';
export let oneStepBack = path.join(process.cwd(),'../');

export const welcomeBye = () => {

    const parseArgs = () => {
        const argsArr = argv.slice(2);

        for (const item of argsArr) {
            const isEven = argsArr.indexOf(item) % 2 === 0;
            let propName, propValue;

            if (isEven) {
                propName = item.replace('--', '');
                username += propName;
            } else {
                propValue = ` is ${item}, `;
                username += propValue;
            }
        }

        if (username.length === 0) throw new Error('Please enter username');

        username = username.trim().replace(/\,$/, '');
        console.log(`Welcome to the File Manager, ${username}!`);
        console.log(`You are currently in ${process.cwd()}`);
    };

    try {
        parseArgs();
        process.on('SIGINT', () => {
            goodbye(username);
        });
    } catch(err) {
        console.error(err);
    }
}
