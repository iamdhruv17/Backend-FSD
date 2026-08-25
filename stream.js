import fs, { read } from 'fs';

const readStream = fs.createReadStream('./Test.txt', 'utf-8');
const writeStream = fs.createWriteStream('./Output.txt', );

readStream.on('data', (chunk) => {
    console.log(chunk);
    console.log(chunk.length);   
    writeStream.write(chunk);
});
readStream.on('end', () => {
    console.log('File reading completed');
    writeStream.close();

});