const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  mantant: {
    type: Number,
    required: true,
  },
  date : {
      type:String,
      required:true,
  },
  descriptif : {
    type:String,
    required:true,
    
},

CompteCredite:{
  type:Schema.Types.ObjectId,ref:"CompteBancaire"
},


},{timestamps:true});

module.exports=mongoose.model("Transaction",TransactionSchema)
