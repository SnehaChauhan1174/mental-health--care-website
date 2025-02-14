const mongoose=require("mongoose")
const initData=require("./data.js")
const post=require("../models/posts.js")

const mongo_url="mongodb://127.0.0.1:27017/MindCare"

main()
    .then(()=>{
        console.log("connected to db")
    }).catch((err)=>{console.log(err)})

async function main(){
    await mongoose.connect(mongo_url)
}


const initDB=async()=>{
    await post.deleteMany({});
    
    await listing.insertMany(initData.data);
    console.log("data was initialized");
}
initDB();