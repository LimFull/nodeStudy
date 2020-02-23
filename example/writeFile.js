const fs = require('fs');

fs.writeFile('./writeFile.txt', '글이 잘 입력됩니다', (err) => {
    if (err) {
        throw err;
    }
    fs.readFile('./writeFile.txt', (err, data) => {
        if (err) {
            throw err;
        }
        console.log(data.toString());
    })
})