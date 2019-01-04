const mongoose=require('mongoose')

const Musics =mongoose.model('Musics'); //import schemas music
//schema for put point to music
const Schema = mongoose.Schema;

const schemaQualification = new Schema({
point_qualified:{ type: Number, required: true, max:5, min:1},
user_qualified: {type: Schema.Types.ObjectId, ref: 'Users'},
music_qualified:{type: Schema.Types.ObjectId, ref: 'Musics'},
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
//update music and push count qualification
schemaQualification.pre('save',async function(next) {

  let music_id =this.music_qualified;
  let tmp_point= this.point_qualified;

  //operation to get percentage from qualification
  let users_qualification_count =0;
  let point =0;
  let total_qualification =0;
//get data
let _qualification =await this.constructor.aggregate([
      { "$match": { "music_qualified": music_id } },
	{"$group" : {_id:"$music_qualified", point:{$sum: `$point_qualified`} ,count: { $sum: 1 }}}
]);
 if(!_qualification.length>0){
   total_qualification=tmp_point;
 }else{
   //operation to get percentage from qualification
   users_qualification_count = _qualification[0].count+1;
   point = _qualification[0].point+tmp_point;
    total_qualification =point/users_qualification_count;
 }


let music_update= await Musics.findOneAndUpdate({_id: music_id},{$set:{qualification: total_qualification.toFixed(1)}});

return next();

});


module.exports=mongoose.model('Qualification',schemaQualification)
