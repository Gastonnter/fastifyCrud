//requiiero mongoose para conectarme a la base de datos
const mongoose = require('mongoose');


// se conecta a la bases de datos
mongoose.connect('mongodb://localhost/fastifyCrud')
.then(()=> console.log('MongoDB CONNECTED ....'))
.catch((err)=> console.log(err));