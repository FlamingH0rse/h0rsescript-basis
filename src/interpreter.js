const main = require('./main/main');
const patterns = require('./syntax_patterns');
let imports = {};
let memory = {};

function HS_Interp(rawString) {
    let rawLines = rawString.split(';')
    console.log(main);
    for (let [, line] of rawLines.entries()) {
        line = line.trim();
        

        // -------------------------------- IMPORTS --------------------------------
        if (patterns.import.test(line)) {
            importType = line.split(':')[0];
            
            importedObjPath = line.replace(`${importType}:import`, ``)
            .split('from').map(obj => obj.trim());
            
            // for (let [,className] of importedObjPath.entries()) {
            //     if (className.exis)
            // }

            importedObjName = importedObjPath;
            //console.log(importType, importedObjPath);
        }
        else if (patterns.runTask.test(line)) {

        }
    }
}

module.exports = {
    HS_Interp: HS_Interp
}