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
app.use(express.static(path.join(__dirname,'/public')))


async function main(){
    await mongoose.connect(mongo_url);
}


app.get("/",(req,res)=>{
    res.send("Root!!");
})

app.get("/landing",(req,res) => {
    res.render("landing_page/landing_page.ejs");
})

app.get("/posts",async (req,res)=>{
   const allPost=await Post.find({});
   res.render('posts/posts.ejs',{allPost});
})




//create new post
app.post('/posts',async(req,res)=>{
    
    const newPost=new Post(req.body.posts);
    await newPost.save();
    res.redirect('/posts');
})


app.get('/posts/:id/edit',async(req,res)=>{
    let {id}=req.params;
    const posts=await Post.findById(id);
    res.render('posts/editPost.ejs',{posts});

})

//update post
app.put('/posts/:id',async(req,res)=>{
    const {id} = req.params;
    await Post.findByIdAndUpdate(id,{...req.body.post});//wrapping out objects for updated info
    res.redirect(`/posts`);
})

//del route
app.delete('/posts/:id',async(req,res)=>{
    let {id}=req.params;
    let delPost=await Post.findByIdAndDelete(id);
    console.log(delPost);
    res.redirect('/posts');
})


app.listen(8080,()=>{
    console.log("server is listening to port 8080");
})

