const userModel=require("../models/User.model")
const bcrypt=require("bcrypt")
const jwt =require("jsonwebtoken")
const tokensList={}
module.exports={
    login: function(req,res,next) {
        userModel.findOne({email:req.body.email},function(err,item){
        
            if(err) {
               next()

            }
            else {
                if(item!=null){
                    if (bcrypt.compareSync(req.body.password,item.password)){
                        const token=jwt.sign({user:item},"hassen",{expiresIn:"1h"})
                        const refreshToken=jwt.sign({user:item},"neopolisDev",{expiresIn:"2h"})
                        tokensList[refreshToken]={
                            status:"logged in",
                            token:token,
                            refreshToken:refreshToken
                        }
                        console.log(tokensList)

                        res.status(200).json({status: 200,message:'succes user found',data:item,token:token,refreshToken:refreshToken})


                    }
                    else {
                        res.status(200).json({status: 200,message:'password not found',data:null})
  
                    }

                }
                else {
                    res.status(200).json({status: 200,message:'mail not found',data:null})
                }
            }
        })
        //res.send("created")
    
    },
    refreshToken:function(req,res,next){
        if((req.body.refreshToken)&&(req.body.refreshToken in tokensList)){
            const token=jwt.sign({user:req.body.user},"jobgate",{expiresIn:"1h"})
            //const refreshToken=randtoken.uid(256)
            const refreshToken=jwt.sign({user:req.body.user},"itgate",{expiresIn:"2h"})
            tokensList[refreshToken]={
                status:"logged in",
                token:token,
                refreshToken:refreshToken
            }
            console.log(tokensList)

            res.status(200).json({status: 200,message:'succes user found',data:req.body.user,token:token,refreshToken:refreshToken})

        }
        else{
            res.status(404).json({status:404,message:"invalid"})
        }


    },
    logout: function(req,res,next){
        const refreshToken = req.body.refreshToken
        if (refreshToken in tokensList){
            delete tokensList[refreshToken]

        }
        res.status(200).json({status:200,message:"Logout Account",data:null})

    },
}