
 const mongoose=require('mongoose')
 const uniqueValidator=require('mongoose-unique-validator')

 //status allower
 const status=['active','disabled','pending','blocked']

const Schema = mongoose.Schema;

const schemaEvents = new Schema({
    name:{ type: String, required: true},
    user_published: {type: Schema.Types.ObjectId, ref: 'Users'},
    name: {type: String},
    description: {type: String},
    date_start: {
        type: Date,
        required: true,
        default: Date.now()
        },

        date_end: {
            type: Date,
            required: true,
            default: Date.now()
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


module.exports=mongoose.model('Albumens',schemaEvents)
