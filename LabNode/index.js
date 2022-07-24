// console.log('lab2-1 node');


//lab3-1
// const fs = require('node.js');
// const axios = require('axios');
// const uuid = require('uuid');

//lab3-2
// const { readFileJSON, writeFileJSON } = require('./fileService');

// readFileJSON('user.json')
//     .then(result => {
//         console.log(result);
//         console.log(typeof result);
//         //ปกติผลัพธ์ของการ readFile จะได้เป็น string ในรูปแบบ JSON
//         //ถ้าต้องการใช้มันออกมาเป็น Obj ให้ใช้ JSON.parse
//         console.log(JSON.parse(result));

//         //การเพิ่มค่า เข้าไปในผลลัพธ์ที่เรา read ออกมาแบบ obj
//         const newValue = JSON.parse(result);
//         newValue.email = 'test@mail.com';

//         //วิธีการ test ว่า fn writeFileJSON ใช้งานได้มั๊ย แต่มันไม่ควรมาเขียนในนี้เวลาใช้งานจริง เพราะมันเกิด infinit loop
//         // writeFileJSON('user.json', JSON.stringify(newValue))
//     })
//     .catch(err => {
//         console.log(err);
//     })


//lab3.3
//Amount is require คือ message
const CustomError = require('./customError');
const err = new CustomError('Amount is require', 400);

console.log(err);
console.log(err.statusCode);
console.log(err.message);