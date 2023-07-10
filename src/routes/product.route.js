const Product = require('../models/product.model')
const routes = [
    {
        url: '/products',
        method: 'GET',
        handler: async(request, reply ) =>{

        const product = await Product.find();
            reply.send(product)
        }
    },
    {
        url: '/products/:id',
        method: 'GET',
        handler: (request, reply ) =>{
            reply.send('single product')
        }
    },
    {
        url: '/products',
        method: 'POST',
        handler: (request, reply ) =>{
            reply.send('CREATING A PRODUCT')
        }
    },
    {
        url: '/products/:id',
        method: 'DELETE',
        handler: (request, reply ) =>{
            reply.send('deleting a product')
        }
    },
    {
        url: '/products/:id',
        method: 'PUT',
        handler: (request, reply ) =>{
            reply.send('UPDATE A PRODUCT')
        }
    }
]


module.exports = routes