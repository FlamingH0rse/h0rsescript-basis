const fs = require('fs');
const { VERSION } = require('./hs-info/hs')
const { HS_Interp } = require('./interpreter');

function main(args) {
    if (args.length > 0) {
        const fileName = args[0];
        let rawFileString = "";

        if (fs.existsSync(fileName)) {
            try {
                rawFileString = fs.readFileSync(fileName, 'utf-8');
            } catch (e) {
                return console.log(e);
            }

            HS_Interp(rawFileString);
            /*                 Program End                 */
        } else {
            console.log(`Cannot find file: ${fileName}`)
        }

    } else {
        console.log(`Welcome to H0rseScript v${VERSION}`);
        console.log(`Type "hs <file_name>" to run it.`);

        // Implement readline here
    }
}

main(process.argv.slice(2));