const userModel=require("../models/User.model")
module.exports={
    create:  function(req,res,next) {
        console.log(req.body)
        const User = new userModel(req.body)
        User.save(req.body, function(err , item){
            if(err) {
                res.status(406).json({status: 406,message:'error create User'+err,data:null})

            }
            else {
                res.status(201).json({status:201,message:'create User',data:item})
            }
        })
    },


    update: function(req,res,next) {
        userModel.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item){
            if(err) {
                res.status(406).json({status: 406,message:'error update users',data:null})

            }
            else {
                res.status(200).json({status:200,message:'update users',data:item})
            }
        })

    },
    read: function(req,res,next) {
        userModel.find({},function(err,item){
            if(err) {
                res.status(406).json({status: 406,message:'error read all users',data:null})

            }
            else {
                res.status(201).json({status:201,message:'read all users',data:item})
            }
        })

    },

    delete: function(req,res,next) {
        //res.send("delete user")
        userModel.findByIdAndRemove(req.params.id,function(err,item){
            if(err) {
                res.status(406).json({status: 406,message:'error delete users',data:null})

            }
            else {
                res.status(201).json({status:200,message:'delete all users',data:item})
            }
        })


    },

    FindById : function(req,res,next){
        userModel.findById(req.params.id,function(err,item){
            if(err) {
                res.status(406).json({status: 406,message:'error Find users ID',data:null})

            }
            else {
                res.status(201).json({status:200,message:'Find user',data:item})
            }
        })
    },

    FindByFirstName : function (req,res,next){
        userModel.find({firstName:req.query.firstName},function(err,item){
            if(err) {
                res.status(406).json({status: 406,message:'error Find users By Name',data:null})

            }
            else {
                res.status(200).json({status:200,message:'Find user By Name',data:item})
            }
        })

    }
}