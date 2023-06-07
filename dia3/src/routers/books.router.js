
const {Router} = require ("express")
const router = Router();
const booksCtrl= require("../controller/books.controller")


router.get("/books",booksCtrl.getBooks);
router.get("/book",booksCtrl.getIdBooks);
router.post("/books",booksCtrl.postBooks);
router.put("/books",booksCtrl.putBooks);
router.delete("/books",booksCtrl.deleteBooks);
