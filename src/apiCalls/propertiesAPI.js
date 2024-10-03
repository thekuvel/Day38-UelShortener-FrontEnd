let url = `${import.meta.env.VITE_BACKEND_URL}/property`

async function getAllProperties(){
    let res = await fetch(url,{
        headers : {
            Authorization : localStorage.getItem("token")
        }
    });
    let data = await res.json();
    return data;
}

export {getAllProperties}