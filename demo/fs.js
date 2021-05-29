// File System
const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'),(err)=>{
//     if(err){
//         throw err
//     }
//     console.log('Папка создана');
// })

const filePath = path.join(__dirname,'test','text.txt')

fs.writeFile(filePath, ' Hello NodeJs', err => {
    if(err){
        throw err
    }
    console.log('file created');
    fs.appendFile(filePath, '\n Hello NodeJs 2', err => {
        if(err){
            throw err
        }
        console.log('file again created');
    })
})