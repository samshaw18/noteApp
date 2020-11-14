const request = require('request')

exports.load = async (url) =>{
    console.log(url);
    return new Promise((res,rej)=>{
    request(url,(err,data,body)=>{
        err? console.log(err):res(JSON.parse(body));
    }
    )
})
}