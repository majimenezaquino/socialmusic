
 const mongoose=require('mongoose')


 //status allower
 const status=['pending','viewed','remove']

const Schema = mongoose.Schema;

const schemaNotification = new Schema({
    user_published: {type: Schema.Types.ObjectId, ref: 'Users'},
    user_target: {type: Schema.Types.ObjectId, ref: 'Users'},
    key: { type: String, default: Date.now()},
    title:{ type: String, required: true},
    description:{ type: String, required: true},
    date_create: {
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



module.exports=mongoose.model('Notification',schemaNotification)
