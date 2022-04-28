const Anime= require('./model')

exports.addAnime=async(animeObj)=>{
    try{
        await Anime.create(animeObj)
    }catch(err){
        console.log(err)
    }
}
exports.deleteAnime=async(animeObj)=>{
    try{
        const deleted = await Anime.deleteMany(animeObj)
    }catch(err){console.log(err);}
}
exports.getAnime=async(animeObj)=>{
    try{
        if(animeObj){
            const animeList=await Anime.find(animeObj)
            console.log(animeList)
        }else{
            const animeList=await Anime.find()
            console.log(animeList)
        }
    }catch(err){console.log(err)}
}
exports.updateAnime=async(animeObj,updateObj)=>{
    try {
        await Anime.updateOne(animeObj,updateObj)
    } catch (error) {
        console.log(error)
    }
}