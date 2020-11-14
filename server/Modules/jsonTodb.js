require('../data/database')
const mongoose = require('mongoose')
const charModel= require('../Models/char')

exports.charsArrToDB = (charArr) =>{
    return new Promise((res,rej)=>{
        charArr.forEach(el => {
            console.log(el);
            const charObj = new charModel({
                id: el.id,
                name: el.name,
                status: el.status,
                species: el.species,
                type: el.type,
                gender: el.gender,
                origin: el.origin,
                image: el.image
            })
            charObj.save().then(()=> console.log(`char ${el.name} saved!`));
            
        });
        res('finished!')
    }
    
    )

}