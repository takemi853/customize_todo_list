const express = require('express');
const app = express();
const PORT = 3000;

let todos = []; // TODOを保存する配列

app.use(express.json()); // JSONのパースを有効化
app.use(express.static('public')); // publicディレクトリ内の静的ファイルを提供

// ルートパスにアクセスがあった場合にindex.htmlを提供
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// TODOを取得するAPI
app.get('/todos', (req, res) => {
    res.json(todos);
});

// TODOを追加するAPI
app.post('/todos', (req, res) => {
    todos.push(req.body);
    res.status(201).send();
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
