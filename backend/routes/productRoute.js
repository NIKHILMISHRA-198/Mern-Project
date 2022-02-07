
const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails, createProductReview, deleteReview, getProductReviews } = require("../controllers/productController");
const { authorizeRoles, isUserAuthenticated } = require("../middleware/auth")
const router = express.Router();

router.route('/products').get(getAllProducts)
router.route('/product/new').post(isUserAuthenticated, authorizeRoles("admin"), createProduct)
router.route('/product/:id')
    .put(isUserAuthenticated, authorizeRoles("admin"), updateProduct)
    .delete(isUserAuthenticated, authorizeRoles("admin"), deleteProduct)
    .get(getProductDetails)


router.route("/review").put(isUserAuthenticated, createProductReview);

router
    .route("/reviews")
    .get(getProductReviews)
    .delete(isUserAuthenticated, deleteReview);

module.exports = router;