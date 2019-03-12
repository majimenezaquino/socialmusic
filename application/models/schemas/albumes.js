
 const mongoose=require('mongoose')
 const uniqueValidator=require('mongoose-unique-validator')

 //status allower
 const status=['active','disabled','pending','blocked']

const Schema = mongoose.Schema;

const schemaPlayLists = new Schema({
    name:{ type: String, required: true},
    privacy:{type: Schema.Types.ObjectId, ref: 'Privacies', required: false},
    user_published: {type: Schema.Types.ObjectId, ref: 'Users'},
    musics_cout: {type: Number},
    img:{ type: String},
    status:{
      type: String,
      enum: status,
      default: 'active'
    }
});


module.exports=mongoose.model('Albumens',schemaPlayLists)
