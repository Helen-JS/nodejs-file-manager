import {argv} from 'process';
import * as readline from 'readline';


export const welcomeBye = () => {
    let username = '';

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
    };

    const goodbye = (name) => {
        console.log(`Thank you for using File Manager, ${name}!`);
        process.exit();
    }

    const rl = readline.createInterface({
        input: process.stdin
    });

    rl.on('line', async (input) => {
        switch (input.trim()) {
            case '.exit':
                goodbye(username);
                break;
            default:
                console.log('Invalid command! Enter ".exit" or press "ctrl + C" to exit');
                break;
        }
    });

    try {
        parseArgs();
        process.on('SIGINT', () => {
            goodbye(username);
        });
    } catch(err) {
        console.error(err);
    }
}
