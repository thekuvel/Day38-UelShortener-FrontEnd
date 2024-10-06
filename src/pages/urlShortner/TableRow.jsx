import { Link } from "react-router-dom";

let frontEndUrl = import.meta.env.VITE_FRONTEND_URL

function TableRow({rec,i}){
    
    // let urlLink = frontEndUrl + "/redirectshorturl?shortUrl=" + rec.shortUrl+"&email="+rec.emailId
    let urlLink = frontEndUrl + "/redirectshorturl/" + rec.shortUrl
    console.log(urlLink)

    return(
        <tr>
            <th scope="row">{i+1}</th>
            {/* <td>{rec.shortUrl}</td> */}
            {/* <td><a href={urlLink}>{rec.shortUrl}</a></td> */}
            <td><a href={urlLink}>{urlLink}</a></td>
            <td>{rec.hitCount}</td>
            <td>{rec.longUrl.substring(0,20)}</td>
        </tr>
    )
}

export default TableRow