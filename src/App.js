import express from 'express';
const app = express();
const __dirname = process.cwd();
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/src/views/states.html');
});

app.listen(80);