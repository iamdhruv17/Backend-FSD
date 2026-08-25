// const buffer = Buffer.from('Hello, World!', 'utf-8');
// console.log(buffer.toString());
// console.log(buffer);
// console.log(buffer.length);
// console.log(buffer[1]);

const buffer1 = Buffer.alloc(20);
buffer1.fill('Hello My name is DS')
console.log(buffer1);
console.log(buffer1.toString());
