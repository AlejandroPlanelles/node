const {Router} = require ("express")
const router = Router();
const bookCtrl= require("../controller/book.controller")
const booksCtrl= require("../controller/books.controller")

router.get("/book",bookCtrl.getBook)
router.post("/book",bookCtrl.postBook);
router.put("/book",bookCtrl.putBook);
router.delete("/book",bookCtrl.deleteBook)

// router.get("/books",booksCtrl.getBooks);
// router.get("/book",booksCtrl.getIdBooks);
// router.post("/books",booksCtrl.postBooks);
// router.put("/books",booksCtrl.putBooks);
// router.delete("/books",booksCtrl.deleteBooks);




module.exports = router;