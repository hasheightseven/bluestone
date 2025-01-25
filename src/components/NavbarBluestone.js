function NavbarBluestone() {
    //const logo = document.createElement("div");
    //const logolineone = document.createDlement("div");
    return (
        <nav>
            <div style={{
                width: "2.6vmin",
                height: "26vmin",
                margin: "8vmin 0 0 8vmin",
                background-color: "#abcdef" }}
                id="initial-div"></div>
            <div className="nav-center-space"></div>
            <div className="nav-burger-menu">
                <div className="nav-bm-line1"></div>
                <div className="nav-bm-line2"></div>
                <div className="nav-bm-line3"></div>
            </div>
        </nav>
    );
}

export default NavbarBluestone;