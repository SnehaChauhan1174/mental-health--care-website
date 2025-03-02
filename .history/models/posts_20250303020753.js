const mongoose=require("mongoose");
const Schema=mongoose.Schema
// const Comments=require('./comments.js');

const postSchema=new Schema({
    title:String,
    description:String,
    image:{
        filename:String,
        url:String,
    },
    tags:[String],
    likes:Number,
    // comments:[
    //     {
    //         type:Schema.Types.ObjectId,
    //         ref:"Comments"
    //     }
    // ],
    // username:{
    //     type:Schema.Types.ObjectId,
    //     ref:'User',
    // },

})
const posts=mongoose.model('Post',postSchema);
module.exports=posts;