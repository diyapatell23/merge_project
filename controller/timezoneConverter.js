
const time = (req,res)=>{
    try{
        res.render('./timezoneConverter/time');
    }catch(err){
        console.log(err);
    }
}

module.exports = {time};