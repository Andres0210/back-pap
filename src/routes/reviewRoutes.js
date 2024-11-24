const { Router } = require("express");
const { createReview, getAllReviews } = require("../controllers/createReview");

const router = Router();

//Ruta para crear un nuevo review

router.post("/review", async (req, res) => {
  try {
    const { email, rating, comment } = req.body;
    const createNewReview = await createReview(email, rating, comment);
    res.status(200).send(createNewReview);
    console.log("se creó la review en la base de datos");
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// Ruta para obrener todos los reviews

router.get("/review", async (req, res) => {
  try {
    const getReviews = await getAllReviews();
    res.status(200).send(getReviews);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
