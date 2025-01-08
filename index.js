let a = 10;
console.log(a);


let car = {
    name: 'Lamborghini',
    price: '1000000',
}
console.log(car);
console.log(module);


let content = "hello file node.js";

const fs = require("fs");
fs.writeFile("demo.txt", "vuongwdz ", "utf8", (err) => {
    console.log(err);
});
fs.readFile("demo.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err); // Xử lý lỗi
        return;
    }
    console.log(data); // In nội dung file
});






