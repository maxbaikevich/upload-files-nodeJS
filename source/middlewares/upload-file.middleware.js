import multer, {diskStorage} from 'multer';
import {extname} from 'node:path'
import {nanoid} from 'nanoid';


const uploadHandler = multer({
    storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
            const name = nanoid()
            const ext = extname(file.originalname);
            callback(null, `${name}${ext}`);
        }
    }),
    limits: {
        filesize: 1024 * 100,
        files: 5,
        fields: 2
    }
});
const addendumUploader = uploadHandler.array('addendum', 5);

export { addendumUploader };

