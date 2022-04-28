require('./db/connection');
const yargs = require('yargs');
const mongoose = require('mongoose');
const {addAnime,deleteAnime,getAnime,updateAnime} = require('./movie/methods')

let queryKey={
    "title":title,
    "protag":protag,
    "protagVA":protagVA,
    "studio":studio,
}

const app=async(yargsObj)=>{
    try{
        if(yargsObj.add){
            //add movie function that takes yargsObj terminal input
            await addAnime({title:yargsObj.title,protag:yargsObj.protag,protagVA:yargsObj.protagVA,studio:yargsObj.studio})
            console.log(`Successfully added ${yargsObj.title}`)
        }else if(yargsObj.list){
            // list movie function
            if (yargsObj.query=="title"){
                await getAnime({title:yargsObj.title})
            }else if(yargsObj.query=="protag"){
                await getAnime({protag:yargsObj.protag})
            }else if(yargsObj.query=="protagVA"){
                await getAnime({protagVA:yargsObj.protagVA})
            }else if(yargsObj.query=="studio"){
                await getAnime({studio:yargsObj.studio})
            }else if(yargsObj.query==undefined){
                await getAnime()
            }else{"incorrect search query"}
        }else if(yargsObj.update){
            // update movies with filterObj and updateObj
            if (yargsObj.update=="title"){
                await updateAnime({title:yargsObj.title},{title:yargsObj.newTitle})
                console.log(`Title of ${yargsObj.title} updated`)
            }else if (yargsObj.update=="protag"){
                await updateAnime({title:yargsObj.title},{title:yargsObj.protag})
                console.log(`Protagonist of ${yargsObj.title} updated`)
            }else if (yargsObj.update=="protagVA"){
                await updateAnime({title:yargsObj.title},{title:yargsObj.protagVA})
                console.log(`Lead voice actor of ${yargsObj.title} updated`)
            }else if (yargsObj.update=="studio"){
                await updateAnime({title:yargsObj.title},{title:yargsObj.studio})
                console.log(`Studio of ${yargsObj.title} updated`)
            }else {
                console.log("Incorrect update query")
            }
        }else if(yargsObj.delete){
            // delete movie function by title, might try to find update
            if (yargsObj.query=="title"){
                await deleteAnime({title:yargsObj.title})
                console.log(`Successfully deleted ${yargsObj.title}`)
            }else if(yargsObj.query=="protag"){
                await deleteAnime({protag:yargsObj.protag})
                console.log(`Successfully deleted anime with protagonist ${yargsObj.protag}`)
            }else if(yargsObj.query=="protagVA"){
                await deleteAnime({protagVA:yargsObj.protagVA})
                console.log(`Successfully deleted anime with lead voice actor of ${yargsObj.protagVA}`)
            }else if(yargsObj.query=="studio"){
                await deleteAnime({studio:yargsObj.studio})
                console.log(`Successfully deleted anime made by ${yargsObj.studio}`)
            }else{"incorrect deletion search query"}
        }else{
            console.log('incorrect command')
        }
    }catch(err){console.log(err);}
    await mongoose.disconnect();
}

app(yargs.argv);