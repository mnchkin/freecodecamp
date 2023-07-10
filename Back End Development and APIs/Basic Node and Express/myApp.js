let express = require('express');
let app = express();
// console.log - вывод текста в консоль
console.log('Hello World');
/*  "/" - путь на сервер;
    function - обработчик;
        req - объект запроса;
        res - объект ответа   */
/*app.get('/', function (req, res) {
  res.send('Hello Express');
});*/
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
app.use('/public', express.static(__dirname + '/public'));
