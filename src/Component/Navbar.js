import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link class="navbar-brand" >Navbar w/ text</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="#">Home <span class="sr-only">(current)</span></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="#">Features</Link>
              </li>
              <li class="nav-item">
              <Link to="/register"> Singup</Link>
              </li>
            </ul>
          </div>
        </nav>
        </div>
        </>
    )
}

export default Navbar;