import { Link } from "react-router-dom"
import { logout } from "../../general/logout"

function Home() {

    function handleLogout(){
        logout();
        location.reload()
    }

    return(
        <div>
            <Link to="/">Home</Link>
            <br />
            <Link to="/properties">properties</Link>
            <button className="btn btn-primary" onClick={handleLogout}>LogOut</button>
        </div>
    )

}

export default Home