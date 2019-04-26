const mongoose=require('mongoose')



//status allower
const status={
    values: ['active','disabled','pending','blocked'],
    message: '{VALUE} no is status allower'
}




const Schema = mongoose.Schema;

const schemaMusic = new Schema({
title:{ type: String, required: false},
author:{ type: String, required: false},
qualification:{ type: Number, max:5, min:0, default: 0},
commentes_count:{ type: Number, default: 0},
reactions:{ type: Number, default: 0},
downloaded:{ type: Number, default: 0},
inplaylist:{ type: Number, default: 0},
dedicated:{ type: Number, default: 0},
played_count:{ type: Number, default: 0},
description: String,
tags: String,
duration:{type: Number, default: 0},
size:{type: Number, default: 0},
download_allowed:{type:Boolean , default: false,required:false},
user_published: {type: Schema.Types.ObjectId, ref: 'Users'},
genres:[{type: Schema.Types.ObjectId, ref: 'Genres', required: false}],
colaborations:[{type: Schema.Types.ObjectId, ref: 'Users'}],
img: {type: String, default: null, required:false},
url: String,
privacy: {type: Schema.Types.ObjectId, ref: 'Privacies', required: false},
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
     enum: status,
     default: 'pending'
   }
});



module.exports=mongoose.model('Musics',schemaMusic)
