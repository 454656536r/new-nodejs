const fs = require('fs')
// fs.readFile('README.md', 'utf-8', (err, data) => {
//     if (err != 0) {
//         console.log('读取失败');
//     }
//     console.log(data);
// })
fs.watchFile("README.md",'hai','utf-8', (err) => {
    if (err != null) {
        console.log('失败');
    }
    console.log('成功');
})
