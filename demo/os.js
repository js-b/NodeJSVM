const os = require('os')

console.log('Оперпционная система: ', os.platform());

console.log('Архитектура процессора: ', os.arch());

console.log('Информация по процессорам:', os.cpus());

console.log('Свободная памаять: ', os.freemem());

console.log('Свободная памаять: ', os.totalmem());

console.log('Домашняя директория: ', os.homedir());

console.log('Включен: ', os.uptime());