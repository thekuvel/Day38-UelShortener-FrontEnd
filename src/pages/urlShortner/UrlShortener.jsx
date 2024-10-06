import { useEffect, useState } from "react";
import style from "./UrlShortener.module.css";
import { Link, useNavigate } from "react-router-dom";
import { urlShortener } from "../../apiCalls/urlShortener.js";
import { jwtDecode } from "jwt-decode";
import { getAllShortUrl } from "../../apiCalls/urlShortener.js";
import TableRow from "./TableRow.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";
let frontEndUrl = import.meta.env.VITE_FRONTEND_URL

function UrlShortener(){
    let navigate = useNavigate();

    let [userInput, setUserInput] = useState({});
    let [shortUrl, setshortUrl] = useState();
    let [data, setData] = useState([]);

    let token = localStorage.getItem("token");
    let loginData = jwtDecode(token);
    console.log(loginData.userEmail);
    

    async function handleSubmit(e){
        e.preventDefault();
        //Call user create API
        let res = await urlShortener({...userInput, email : loginData.userEmail});
        console.log(res)
        if(res.code == 1){
            // setshortUrl(frontEndUrl + "/redirectshorturl?shortUrl=" + res.shortUrl+"&email="+loginData.userEmail);
            setshortUrl(frontEndUrl + "/redirectshorturl/" + res.shortUrl);
        }else{
			alert(res.msg);
		}
		
    }

    function handleInputValueChange(e){
        setUserInput({
            ...userInput,
            [e.target.name] : e.target.value
        })
    }

    function handleShortUrl(e){
        location.replace(shortUrl)
    }

    async function getShortUrl(){
        let res = await getAllShortUrl({email : loginData.userEmail});
        setData(res.shortUrlObjArray);
    }

    useEffect(()=>{
        getShortUrl();   
    },[shortUrl])

    return(

        <>
        <NavBar/>
        <form className={style.formContainer} onSubmit={handleSubmit}>

			<div>
                <h4 className={style.xyCenter}>URL Shortner</h4>
				<h5 className={style.xyCenter}>Enter the url to get short url</h5>
			</div>

			<div className="mb-3">
				<label htmlFor="longUrl" className="form-label">URL</label>
				<input id="longUrl" type="text" name="longUrl" className="form-control" value={userInput.longUrl || ""} onChange={handleInputValueChange}/>
			</div>

			<div className={`mb-3 ${style.xyCenter}`}>
				<button className="btn btn-primary" type="submit">Generate Short URL</button>
			</div>	

            <div className="mb-3">
				<label htmlFor="shortUrl" className="form-label">Short URL</label>
				<input id="shortUrl" type="text" name="shortUrl" className="form-control" value={shortUrl || ""} readOnly onClick={handleShortUrl}/>
			</div>		

		</form>

        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Short Url</th>
                <th scope="col">No of Clicks</th>
                <th scope="col">LongUrl</th>
                </tr>
            </thead>
            <tbody>
                {data.map((val,i)=>(
                    <TableRow rec={val} i={i} key={i}/>
                ))}
            </tbody>
        </table>

        </>
    )
}

export default UrlShortener
