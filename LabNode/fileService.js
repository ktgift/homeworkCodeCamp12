const { readFile, writeFile } = require('fs/promises');

//วิธีที่ 2 export ตอนเขียน function ต้องเลือกอย่างใดอย่างหนึ่ง อย่าปนกัน
exports.readFileJSON = function (fileName) {
    const data = readFile(fileName, 'utf-8');
    return data; 
}

exports.writeFileJSON = function (fileName, data) {
    writeFile(fileName, data, 'utf-8');
}


// function readFileJSON(fileName) {
//     const data = readFile(fileName, 'utf-8');
//     return data; 
// }

// function writeFileJSON(fileName, data) {
//     // เขียนได้เลยไม่ต้องมีตัวแปร เพราะมันไม่ return อะไร
//     writeFile(fileName, data, 'utf-8');
// }

// //การ export แบบ obj
// module.exports = { readFile, writeFile };

