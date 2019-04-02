const mongoose=require('mongoose')

const Schema = mongoose.Schema;

const schemaUserMusician = new Schema({
user_published: {type: Schema.Types.ObjectId, ref: 'Users'},
musicians:[{musician:{type: Schema.Types.ObjectId, ref: 'Musicians'}}],
description: String,

date_create: {
    type: Date,
    required: true,
    default: Date.now()
    },
date_update: {
    type: Date,
    required: true,
    default: Date.now()
    },
status:{
     type: String,
     default: 'active'
   }
});



module.exports=mongoose.model('UserMusician',schemaUserMusician)
