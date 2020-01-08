const fs = require("fs");
/**
 * Parses a .tcs file and returns an object - containing inputs and outputs and no of testcases
 * @param tcspath path to the .cpp file
 */
function parseTestCasesFile(tcspath) {
    var filePath = tcspath;
    console.log('Parsing file at', tcspath);
    try { var txt = fs.readFileSync(filePath).toString() }
    catch (err) { console.error(err); return; }
    var tcNum = 0;
    var inpCases = [];
    var opCases = [];
    console.log(txt);
    const tcs = JSON.parse(txt);
    for (let element of tcs) {
        tcNum++;
        inpCases.push(element.input);
        opCases.push(element.output);
    }
    var result = {
        inputs: inpCases,
        outputs: opCases,
        numCases: inpCases.length
    }
    console.log(result);
    return result;

}

module.exports = parseTestCasesFile;