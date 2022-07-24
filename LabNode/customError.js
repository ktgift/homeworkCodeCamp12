class CustomError extends Error {
    constructor(errorMessage, statusCode) {
        super(errorMessage);
        //check ค่าว่าง
        this.message = errorMessage === '' ? 'Dafault Error' : errorMessage;
        this.statusCode = statusCode;
    }
}
//โดยปกติ error จะมี constructor แค่อันเดียว

//export class
module.exports = CustomError
