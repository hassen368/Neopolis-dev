const TransactionModel=require("../models/transaction.model")
const CompteBancaireModel=require("../models/compteBancaire.model")
module.exports={
    create:  function(req,res,next) {
        console.log(req.body)
        const Transaction = new TransactionModel(req.body)
        Transaction.save(req.body,async function(err , item){
            if(err) {
                res.status(406).json({status: 406,message:'error create Transaction'+err,data:null})

            }
            else {
               await CompteBancaireModel.update({_id:item.CompteCredite},{$push:{transaction:item}})
                res.status(201).json({status:201,message:'create Transaction',data:item})
            }
        })
    },
    update: function(req,res,next) {
        TransactionModel.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item){
            if(err) {
                res.status(406).json({status: 406,message:'error update Transactions',data:null})

            }
            else {
                res.status(200).json({status:200,message:'update Transactions',data:item})
            }
        })

    },
    read: function(req,res,next) {
        TransactionModel.find({},function(err,item){
            if(err) {
                res.status(406).json({status: 406,message:'error read all Transactions',data:null})

            }
            else {
                res.status(201).json({status:201,message:'read all Transactions',data:item})
            }
        })

    },

    delete: function(req,res,next) {
        TransactionModel.findByIdAndRemove(req.params.id,function(err,item){
            if(err) {
                res.status(406).json({status: 406,message:'error delete Transactions',data:null})

            }
            else {
                res.status(201).json({status:200,message:'delete all Transactions',data:item})
            }
        })


    },

    FindById : function(req,res,next){
        TransactionModel.findById(req.params.id,function(err,item){
            if(err) {
                res.status(406).json({status: 406,message:'error Find Transactions ID',data:null})

            }
            else {
                res.status(201).json({status:200,message:'Find Transaction',data:item})
            }
        })
    },
}