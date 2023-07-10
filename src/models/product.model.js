const {Schema,model} = require('mongoose')


const podroductSchema = new Schema ({
    title: String,
    price: Number,
    image: String,
    description: String,
    quantity: Number,
},{
    timestamps: true,
    versionKey: false,
}
)