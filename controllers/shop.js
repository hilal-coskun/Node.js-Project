const Product =require('../models/product');
const Category=require('../models/category');

exports.getIndex= (req,res,next)=>{

    const products= Product.getAll();
    const categories=Category.getAll()
    res.render('shop/index', 
    {
        title: 'Shopping', 
        products: products,
        categories: categories,
        path:'/'
    });
};

exports.getProducts= (req,res,next)=>{

    const products= Product.getAll();
    const categories= Category.getAll();
    res.render('shop/products', 
    {
        title: 'Products', 
        products: products,
        categories: categories,
        path:'/products'
    });
};

exports.getProductsCategoryId= (req,res,next)=>{
    const categoryid=req.params.categoryid;
    const products= Product.getProductsCategoryId(categoryid);
    const categories= Category.getAll();
    
    res.render('shop/products', 
    {
        title: 'Products', 
        products: products,
        categories: categories,
        selectedCategory: categoryid,
        path:'/products'
    });
};

exports.getProduct= (req,res,next)=>{

    //const productId= req.params.productid;
    const product= Product.getById(req.params.productid);

    res.render('shop/product-detail', {
        title: product.name,
        product: product,
        path: '/products'
    });
    
};



exports.getProductDetails= (req,res,next)=>{

    const products= Product.getAll();
    res.render('shop/details', 
    {
        title: 'Details', 
        products: products,
        path:'/details'
    });
};

exports.getCard= (req,res,next)=>{

    const products= Product.getAll();
    res.render('shop/card', 
    {
        title: 'Card', 
        products: products,
        path:'/card'
    });
};

exports.getOrders= (req,res,next)=>{

    const products= Product.getAll();
    res.render('shop/orders', 
    {
        title: 'Orders', 
        products: products,
        path:'/orders'
    });
};