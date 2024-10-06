import { Link } from "react-router-dom"
import { logout } from "../../general/logout"

function Home() {

    function handleLogout(){
        logout();
        location.reload()
    }

    return(
        <div>
            <h3>URL Shortner</h3>
            <br />
            Go To <Link to="/shorturl">Url Shortner</Link>
            <br />
            <br />
            <button className="btn btn-primary" onClick={handleLogout}>LogOut</button>
        </div>
    )

}

export default Home