import React from "react";

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top border-bottom border-success z-1">
        <div className="container">
            <a className="navbar-brand text-success" href="/">{'<MiCV />'}</a>
            <ul className="navbar-nav ms-auto d-flex flex-row gap-3">
                <li className="nav-item"><a className="nav-link" href="/proyectos">Proyectos</a></li>
                <li className="nav-item"><a className="nav-link" href="/contacto">Contacto</a></li>
            </ul>
        </div>
    </nav>
)

export default Header;