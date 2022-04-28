require('./db/connection');
const yargs = require('yargs');
const mongoose = require('mongoose');
const {addAnime,deleteAnime,getAnime,updateAnime} = require('./movie/methods')

queryKey={
    title: 'title',
    protag:'protag',
    protagVA:'protagVA',
    studio:'studio',
}

const app=async(yargsObj)=>{
    try{
        if(yargsObj.add){
            //add movie function that takes yargsObj terminal input
            await addAnime({title:yargsObj.title,protag:yargsObj.protag,protagVA:yargsObj.protagVA,studio:yargsObj.studio})
            console.log(`Successfully added ${yargsObj.title}`)
        }else if(yargsObj.list){
            // list movie function
            if (queryKey[yargsObj.query]){
                await getAnime({[queryKey[yargsObj.query]]:yargsObj.search})
            }else{
                await getAnime()
            }
        }else if(yargsObj.update){
            // update movies with filterObj and updateObj
            if (queryKey[yargsObj.query]){
                await updateAnime({title:yargsObj.title},{[queryKey[yargsObj.query]]:yargsObj.change})
                console.log(`${yargsObj.title} updated`)
            }else {
                console.log("Incorrect update query")
            }
        }else if(yargsObj.delete){
            // delete movie function by title, might try to find update
            if (queryKey[yargsObj.query]){
                await deleteAnime({[queryKey[yargsObj.query]]:yargsObj.target})
            }else{"Missing deletion query"}
        }else{
            console.log('incorrect command')
        }
    }catch(err){console.log(err);}
    await mongoose.disconnect();
}

app(yargs.argv);