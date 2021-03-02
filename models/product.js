const products=[
    {id:"13213" ,name:'Samsung S6' ,price:'2000', imageUrl:'telefon.jpg', categoryid:"1"},
    {id:"13214" ,name:'Asus Tuf Gaming' ,price:'8000', imageUrl:'telefon.jpg', categoryid:"2"},
    {id:"13215" ,name:'Ipad' ,price:'5000', imageUrl:'telefon.jpg', categoryid:"3"}
]


module.exports= class Product{

    constructor(name, price,imageUrl,categoryid){
        this.id= (Math.floor(Math.random()*99999)+1).toString();
        this.name=name;
        this.price=price;
        this.imageUrl=imageUrl;
        this.categoryid=categoryid;
    }

    saveProduct(){
        products.push(this);
    }

    static getAll(){
        return products;
    }

    static getById(id){
        return products.find(i=>i.id===id);
    }

    static getProductsCategoryId(categoryid){
        return products.filter(i=> i.categoryid==categoryid);
    }

    static Update(product){
        const index= products.findIndex(i=>i.id===product.id);

        products[index].name=product.name;
        products[index].price=product.price;
        products[index].imageUrl= product.imageUrl;
    }

    static DeleteById(id){  
        const index=products.findIndex(i=>i.id===id);

        products.splice(index,1);
        
    }

}

//const products= Product.getAll();
//const p= new Product('Samsung',2000,'telefon.jpg');
//p.saveProduct();
