
export default function NavBar () {
    return(
        <nav className="navbar navbar-expand-lg">
        <div className="container">
            <a className="navbar-brand" href="#">
                {/* <img src="imgs/logo.png" alt="logo"/> */}
                <b>ICSTSRE</b>
            </a>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#main" aria-controls="main" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa-solid fa-bars"></i>
            </button>
            <div className="navbar-collapse collapse" id="main"/>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link p-2 p-lg-3 active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link p-2 p-lg-3" href="#About">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link p-2 p-lg-3" href="#Contact">Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link p-2 p-lg-3" href="works">Work</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link p-2 p-lg-3" href="events">Events</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}