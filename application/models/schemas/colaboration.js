const mongoose=require('mongoose')
const uniqueValidator=require('mongoose-unique-validator')

const Users =mongoose.model('Users');
//status allower
const status=['active','disabled','pending','blocked']

const Schema = mongoose.Schema;

const schemaCollaborators = new Schema({

  user_published: {
    type: Schema.Types.ObjectId, ref: 'Users',
    required: true
 },
 user_collaborator: {
   type: Schema.Types.ObjectId, ref: 'Users',
   required: true
},
music_id: {
  type: Schema.Types.ObjectId, ref: 'Musics',
  required: true
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



module.exports=mongoose.model('Collaborators',schemaCollaborators)
