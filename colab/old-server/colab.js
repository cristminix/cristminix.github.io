
const express = require('express');
const { createServer } = require("http");
const { Server } = require("socket.io");
const { exec } = require("child_process");

const cors = require('cors');
const fs = require('fs');
const app = express();
const ngrok = require('ngrok');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const port = 5000;
let io;
function compile_tts(text){
// command = './tts.sh "%s" "%s"' % (text_content,out_file)
}
const path = require('path')
const serveIndex = require('serve-index');
const public_audio_path = 'drive/MyDrive/indonesia-tts/audio_outputs';
console.log(public_audio_path)
//app.use(express.static(path.resolve(__dirname, public_audio_path)));
//app.use("/public", serveIndex(path.resolve(__dirname, public_audio_path)));
//app.use(express.directory(path.resolve(__dirname, public_audio_path)) );
//app.use(express.errorHandler());

app.use('/p', serveIndex(path.join(__dirname, public_audio_path)));
app.use('/p', express.static(path.join(__dirname, public_audio_path)));

app.get('/', (req, res) => {
    res.send('Hello World I am running locally');
});
app.get('/tts', (req, res) => {
    const sid = req.query.socketId;
    const out_file = `tts-${(new Date()).getTime().toString()}.wav`;
    exec(`./tts.sh "${req.query.text}" "${out_file}"`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        const match_output = stdout.match(/(Saving\ output\ to.*\.wav)/g);
        io.emit('report','tts',`/p/${out_file}`,sid);
    });
    res.status(200).send({
      success: true,
      message: "welcome to the beginning of greatness",
  });
});

const httpServer = createServer(app);
io = new Server(httpServer, {
  cors: {
    origin: "*"
  },
});

io.on("connection", (s) => {
  console.log("We are live and connected");
  console.log(s.id);
  s.on('notice', function (from, msg) {
    console.log('MSG', from, ' saying ', msg);
  });
});

httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
ngrok.connect({
    proto : 'http',
    addr : process.env.PORT,
}, (err, url) => {
    if (err) {
        console.error('Error while connecting Ngrok',err);
        return new Error('Ngrok Failed');
    }
});
