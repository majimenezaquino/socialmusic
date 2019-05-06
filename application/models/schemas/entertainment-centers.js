const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const schemaReactions = new Schema({
privacy: {type: Schema.Types.ObjectId, ref: 'Privacies', required: false},
user_published: {type: Schema.Types.ObjectId, ref: 'Users'},
name:{ type: String, required: false},
country:{type: Schema.Types.ObjectId, ref: 'Countries'},
city:{type: Schema.Types.ObjectId, ref: 'Cities'},
address:{ type: String, required: false},
qualification:{ type: Number, max:5, min:0, default: 0},
images:[{ image: String, required: false}],
coords: {
    latitude: String,
    longitude: String,
    accuracy: String,
    altitude: String,
    altitudeAccuracy: String,
    heading: String,
    speed: String,
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
     default: 'active'
   }
});




module.exports=mongoose.model('EntertainmentCenters',schemaReactions)
