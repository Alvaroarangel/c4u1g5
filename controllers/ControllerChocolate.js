const mongoose =require('../src/conexDB/conn');
//const Chocolate=require('../models/Chocolate');
const Chocolate=require('../models/Chocolate.js')

function saveChocolate(req,res){
    var myChocolate= new Chocolate(req.body);
    
    myChocolate.save((err,result)=>{
        res.status(200).send({message:result});
    });
}
function buscarData(req,res){
    var idChocolate=req.params.id;
    Chocolate.findById(idChocolate).exec((err,result)=>{
         if(err){
            res.status(500).send({message:'Error al momento de ejecutar la solicitud'});
         }else{
            if(!result){
                res.status(404).send({message:'El registro a buscar no se encuentra disponible'});
            }else{
                res.status(200).send({result});
            }
         }
    });
}
function listarAllData(req,res){
    var idChocolate=req.params.idb;
    if(!idChocolate){
        var result=Chocolate.find({}).sort('nombre');
    }else{
        var result=Chocolate.find({_id:idChocolate}).sort('nombre');
    }
    result.exec(function(err,result){
        if(err){
            res.status(500).send({message:'Error al momento de ejecutar la solicitud'});
        }else{
            if(!result){
                 res.status(404).send({message:'El registro a buscar no se encuentra disponible'});
        }else{
                res.status(200).send({result});
        }
       }
    })
}
function updateChocolate(req,res){
    var id = mongoose.Types.ObjectId(req.query.productId);
    Chocolate.findOneAndUpdate({_id: id}, req.body, {new: true}, function(err,chocolate) {
        if (err)
            res.send(err);
            res.json(Chocolate);
    });
}

function deleteChocolate(req,res){
    var idChocolate=req.params.id;
    Chocolate.findByIdAndRemove(idChocolate, function(err, Chocolate){
        console.log ("Metodo delete",err,Chocolate)
        if(err) {
        return res.json(500, {
        message: 'No hemos encontrado el prodcuto'
        })
        }
        return res.json(Chocolate)
        });
    }

module.exports={
    buscarData,
    listarAllData,
    saveChocolate,
    updateChocolate,
    deleteChocolate
}