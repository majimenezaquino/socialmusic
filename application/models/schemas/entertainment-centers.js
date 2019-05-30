const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const schemaReactions = new Schema({
privacy: {type: Schema.Types.ObjectId, ref: 'Privacies', required: false},
user_published: {type: Schema.Types.ObjectId, ref: 'Users'},
name:{ type: String, required: false},
address:{ type: String, required: false},
latitud:{ type: String, required: false},
longitud:{ type: String, required: false},
qualification:{ type: Number, max:5, min:0, default: 0},
image: {type: String, required: false},

 schedules:[{
   day: {type: Schema.Types.ObjectId, ref: 'EntertainmentCentersDay'},
   hour_open: {type: Boolean, required: false, default: false},
   hour_close: {type: Boolean, required: false, default: false}
  }],

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




module.exports=mongoose.model('EntertainmentCenters',schemaReactions)
