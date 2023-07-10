//requerimos, la libreria
const fastify = require('fastify')({
    logger: true
});


const productRoute = require('./routes/product.route')

require('./utils/mongoose')
// creamos una ruta 
fastify.get("/",(request,reply)=>{
    reply.send({hello : "world"})
});

productRoute.forEach(route =>{
    fastify.route(route)
})



//corremos el servidor 
const start = async()=>{
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
};


start();