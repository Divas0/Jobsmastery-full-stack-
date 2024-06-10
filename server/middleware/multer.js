import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "images"));
  },
  filename: function (req, file, cb) {
    const id = req.params.id;
    cb(null, `pfp_${id}`);
  }
});

const fileFilter = (req, file, cb) => {
  if (!file.mimetype.includes('image')) {
    return cb(new Error('not an image'));
  }
  cb(null, true);
};

export const upload = multer({
  storage: storage,
  fileFilter
}).single('image');
