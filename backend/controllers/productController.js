const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");


//CREATE A PRODUCT -- ADMIN

exports.createProduct = catchAsyncErrors(async (req, res, next) => {
    req.body.user = req.user.id; // To know who created the product

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    });
});



//Get all Products callback function
//It will be called in Product route and then in app.js 
exports.getAllProducts = catchAsyncErrors(async (req, res) => {

    const resultPerPage = 10;
    const productCount = await Product.countDocuments();

    const apiFeature = new ApiFeatures(Product.find(), req.query)
        .search()
        .filter()
        .pagination(resultPerPage);
    const products = await apiFeature.query;
    res.status(200).json({
        success: true,
        products
    })
}
)


//Update Product

exports.updateProduct = catchAsyncErrors(async (req, res) => {
    let product = Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("Product not found", 404))
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        product
    })

})

//Delete Product

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {

    const product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("Product not found", 404))
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: "Product deleted successfully"

    })
}
)

//Get Single Product Details

exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404))
    }

    res.status(200).json({
        success: true,
        product,
        productCount,

    })

})