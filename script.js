//Fetching the data from API
// const URL = "http://localhost:3000/users"
// fetch(URL).then(res=>res.json()).then(data=>{
//     setInterval(()=>{
//         for(let i =0; i<data.length;i++){
//             console.log(data[i].id)
//         }
//     },10000)
// })

// let options = {
//     'method':'POST',
//     'headers':{
//         'Content-Type':'application/json',
//         'accept':'application/json'
//     },
//     body:JSON.stringify(        {
//         "id":"gfisnd",
//         "firstName":"VISHNU PRIYA",
//         "LASTNAME":"UMMAGANI",
//         "Email":"VPG@gmail.com"
//     })
// }
    
// const URL = "http://localhost:3000/users"
// fetch(URL,options).then(res=>{
//     if(res.ok){
//         console.log(res.status,res.statusText)
//     }
// })


// let data = {
//     "id":"fjsiuh",
//     "firstName":"ADITI",
//     "LASTNAME":"GOPAGANI",
//     "Email":"aditi@gmail.com"
// }
// let options = {
//     'method':'POST',
//     'headers':{
//         'Content-Type':'application/json',
//         'accept':'application/json'
//     },
//     body:JSON.stringify(data)
// }
    
// const URL = "http://localhost:3000/users"
// fetch(URL,options).then(res=>res.json()).then((jsonData)=>console.log(jsonData));


let options = {
    'method':'GET',
}
const URL = "http://localhost:3000/users"
fetch(URL,options).then(res=>res.json()).then((jsonData)=>console.log(jsonData));