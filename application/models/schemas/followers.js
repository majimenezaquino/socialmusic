const mongoose=require('mongoose')
const uniqueValidator=require('mongoose-unique-validator')

const Users =mongoose.model('Users');
//status allower
const status=['active','disabled','pending','blocked']

const Schema = mongoose.Schema;

const schemaFollowers = new Schema({

  user_follower: {
    type: Schema.Types.ObjectId, ref: 'Users',
    required: true
 },
 user_followee: {
   type: Schema.Types.ObjectId, ref: 'Users',
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

schemaFollowers.pre('save',async function(next) {
let _fallower =this.user_follower;
let _followee =this.user_followee;
  let _user_followee =await Users.find({_id: _followee});
  console.log(_user_followee)
  if(!_user_followee.approve_followee){ //is not approve followeee

    await Users.findByIdAndUpdate({_id: _fallower }, {$inc:{followee_count:1}});
    await Users.findByIdAndUpdate({_id: _followee }, {$inc:{followers_count:1}});
  }

//return next();
});

module.exports=mongoose.model('followers',schemaFollowers)
