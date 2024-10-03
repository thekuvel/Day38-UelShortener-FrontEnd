
let url = `${import.meta.env.VITE_BACKEND_URL}`

async function urlShortener(payLoad){
    // console.log(payLoad);
    
    let res = await fetch(`${url}/urlshortener`, {
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(payLoad)
    })
    let data = await res.json();
    console.log(data);
    return data;
}

async function getLongUrl(payLoad){
    let res = await fetch(`${url}/getlongurl`, {
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(payLoad)
    })
    let data = await res.json();
    console.log(data);
    return data;
}

async function getAllShortUrl(payLoad){
    console.log(payLoad);
    
    let res = await fetch(`${url}/getallshorturl`, {
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(payLoad)
    })
    let data = await res.json();
    console.log(data);
    return data;
}

export {urlShortener,getLongUrl,getAllShortUrl}