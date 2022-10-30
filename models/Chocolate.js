const mongoose=require('mongoose');
const schema = mongoose.Schema;

const ChocolateSchema=new schema({
    marca:String,
    sabor:String
    });

    module.exports = mongoose.model('chocolate', ChocolateSchema);

//module.exports = Chocolate;