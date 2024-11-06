import express from 'express';
import {dirname} from 'node:path';
import {addendumUploader} from './source/middlewares/upload-file.middleware.js';
const app = express()
const port = 3000

// console.log(addendumUploader)
function add(req, res) {
    addendumUploader(req, res,(err) => {
        if(err) {
          console.log('fffffffffffffffffff')
        }else {
            const fileName = [];
            for(let f of req.files)
                fileName.push(f.fileName)

            res.setHeader('Content-type', 'text/plain; charset=utf-8');
            res.end(`Успех! Загружено ${fileName.length} файлов`)
        }
    })
}

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(dirname("/public/index.html"));
})

  app.post('/add', add)
  



app.listen(port, ()=> {
    console.info(`Server started on http://localhost:${port}`);
});
