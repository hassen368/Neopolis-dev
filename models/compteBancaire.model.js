const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CompteBancaireSchema = new Schema({
  libelle: {
    type: Number,
    required: true,
  },
  type : {
      type:String,
      required:true,
      enum:["courant","epargne"]
  },
  transaction:[{
    type:Schema.Types.ObjectId,ref:"Transaction"
  }],
},{timestamps:true});

module.exports=mongoose.model("CompteBancaire",CompteBancaireSchema)
