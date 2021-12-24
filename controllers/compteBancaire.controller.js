const CompteBancaireModel=require("../models/compteBancaire.model")


module.exports={
    create: function(req,res,next) {
        console.log(req.body)
        const CompteBancaire = new CompteBancaireModel(req.body)
        CompteBancaire.save(req.body,function(err , item){
            if(err) {
                res.status(406).json({status: 406,message:'error create CompteBancaire'+err,data:null})

            }
            else {
                res.status(201).json({status:201,message:'create CompteBancaire',data:item})
            }
        })
    },
    update: function(req,res,next) {
        CompteBancaireModel.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item){
            if(err) {
                res.status(406).json({status: 406,message:'error update CompteBancaires',data:null})

            }
            else {
                res.status(200).json({status:200,message:'update CompteBancaires',data:item})
            }
        })

    },
    read: function(req,res,next) {
        CompteBancaireModel.find({},function(err,item){
            if(err) {
                res.status(406).json({status: 406,message:'error read all CompteBancaires',data:null})

            }
            else {
                res.status(201).json({status:201,message:'read all CompteBancaires',data:item})
            }
        })

    },

    delete: function(req,res,next) {
        CompteBancaireModel.findByIdAndRemove(req.params.id,function(err,item){
            if(err) {
                res.status(406).json({status: 406,message:'error delete CompteBancaires',data:null})

            }
            else {
                res.status(201).json({status:200,message:'delete all CompteBancaires',data:item})
            }
        })


    },

    FindById : function(req,res,next){
        CompteBancaireModel.findById(req.params.id,function(err,item){
            if(err) {
                res.status(406).json({status: 406,message:'error Find CompteBancaires ID',data:null})

            }
            else {
                res.status(201).json({status:200,message:'Find CompteBancaire',data:item})
            }
        })
    },
}