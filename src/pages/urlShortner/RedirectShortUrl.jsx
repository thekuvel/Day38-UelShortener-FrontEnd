
import { Link, useSearchParams } from "react-router-dom"
import { getLongUrl } from "../../apiCalls/urlShortener";

async  function RedirectShortUrl(){

    let [searchParams] = useSearchParams();

    let shortUrl = searchParams.get("shortUrl");
    let email = searchParams.get("email");

    let res = await getLongUrl({email,shortUrl});

    if(res.code == 1){      
        location.replace(res.longUrl);
    }
    
    return(
        <>
        ...Loding
        </>
    )
}

export default RedirectShortUrl