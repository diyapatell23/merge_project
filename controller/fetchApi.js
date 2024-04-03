
const posts = (req,res)=>{
    try{
        res.render('./fetchApi/alluser');
    }catch(err){
        console.log(err);
    }
}

const postdetails = (req,res)=>{
    try{
        res.render('./fetchApi/showuser');
    }catch(err){
        console.log(err);
    }
}

const comments = (req,res)=>{
    try{
        res.render('./fetchApi/showcomments');
    }catch(err){
        console.log(err);
    }
}

module.exports ={posts, postdetails, comments};