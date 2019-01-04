const mongoose=require('mongoose')

 const genres={
  values: ['ADMIN_ROL','BASIC_ROL','VIST_ROL'],
  message: '{VALUE}  no  is rol  allower'
 };

//status allower
const status={
    values: ['active','disabled','pending','blocked'],
    message: '{VALUE} no is status allower'
}

const Schema = mongoose.Schema;

const schemaMusic = new Schema({
title:{ type: String, required: true},
author:{ type: String, required: true},
qualification:{ type: Number, max:5, min:1, default: 0},
commentes_count:{ type: Number, default: 0},
reactions:{ type: Number, default: 0},
downloaded:{ type: Number, default: 0},
inplaylist:{ type: Number, default: 0},
dedicated:{ type: Number, default: 0},
played_count:{ type: Number, default: 0},
description: String,
tags: String,
user_published: {type: Schema.Types.ObjectId, ref: 'Users'},
genre:{type: Schema.Types.ObjectId, ref: 'Genres'},
img: {type: String, default: null},
url: String,
privacy: {
    type: String,
    enum: ['public','privite'],
    default: 'public'
},
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
     default: 'active'
   }
});



module.exports=mongoose.model('Musics',schemaMusic)
