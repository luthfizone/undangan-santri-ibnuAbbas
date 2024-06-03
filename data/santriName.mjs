import fs from "fs";

let data = [
    // dummy data
    {id: "", name: "Fatih Mafaizidin"},
    {id: "", name: "Muhammad Luthfi"},
    {id: "", name: "Faras Majid"},
    {id: "", name: "A'an Hidayat"},
    {id: "", name: "Muhammad Rakha Izdihar"}
];

let result = {};

data.forEach((item) => {
    // replace id from name uppercase to lowercase and remove apostrophe (') 
    let id = item.name.toLowerCase().replace(/'/g, '').replace(/ /g, '-');
    result[id] = item.name
});

// generate to json with 2 indentation
let jsonData = JSON.stringify(result, null, 2);

fs.writeFile('outputSantriName.json', jsonData, (err) => {
    // write file to outputSantriName.json
    if (err) {
        console.error('Error writing file', err);
    } else {
        console.log('Success write file outputNamaSantri.json');
    }
})