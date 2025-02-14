const express=require("express")
const app=express();
const mongoose=require("mongoose")
const path=require("path");
const methodOverride=require("method-override")
const ejsMate=require("ejs-mate")//use to make templates
const Post=require("./models/posts.js");

const mongo_url="mongodb://127.0.0.1:27017/MindCare";

main()
.then(()=>{
    console.log("connected to db")
}).catch((err)=>{
    console.log(err);
})

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.engine('ejs',ejsMate)


async function main(){
    await mongoose.connect(mongo_url);
}

app.use(express.static(path.join(__dirname,'/public')))

app.get("/",(req,res)=>{
    res.send("Root!!");
})

app.get("/posts",(req,res)=>{

})

app.listen(8080,()=>{
    console.log("server is listening to port 8080");
})
