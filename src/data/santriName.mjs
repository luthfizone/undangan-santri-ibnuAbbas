import fs from "fs";
import { formatDataSantri } from "./formatData.mjs";

let data = formatDataSantri

let result = {};

data.forEach((item, index) => {
    // replace id from name uppercase to lowercase and remove apostrophe (') 
    // let id = index
    let id = item.name.toLowerCase().replace(/'/g, '').replace(/ /g, '-').replace(/\./g, '');
    result[id] = item.name
});

// generate to json with 2 indentation
let jsonData = JSON.stringify(result, null, 2);

fs.writeFile('data.json', jsonData, (err) => {
    // write file to outputSantriName.json
    if (err) {
        console.error('Error writing file', err);
    } else {
        console.log('Success write file data.json');
    }
})