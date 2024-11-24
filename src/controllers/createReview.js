const { Review } = require("../DB_connection");

//Controller para crear un comentario a la página
const createReview = async (email, rating, comment) => {
  if (!email || !rating) {
    throw new Error("Debe ingresar email y calificación");
  }
  if (rating < 1 || rating > 5) {
    throw new Error("Debe ingresar un rating entre 1 y 5");
  }
  const newReview = await Review.create({
    email,
    rating,
    comment,
  });
  return newReview;
};

//Controller para obtener todas las reviews

const getAllReviews = () => {
  const reviews = Review.findAll();
  console.log(reviews);
  return reviews;
};

module.exports = {
  createReview,
  getAllReviews
};
