import React from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { i18n, t } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top border-bottom border-success z-1">
            <div className="container">
                <a className="navbar-brand text-success" href="/">{'<ABM />'}</a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto d-flex flex-lg-row flex-column align-items-lg-center gap-3 text-center mt-3 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/curriculum">CV</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/proyectos">{t('seeProjects')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contacto">{t('contact')}</a>
                        </li>
                        <li className="nav-item justify-content-center">
                            <select
                                className="form-select custom-language-select text-light border-success"
                                onChange={(e) => changeLanguage(e.target.value)}
                                value={i18n.language}
                                style={{ 
                                    width: "auto", 
                                    backgroundColor: "#212529",
                                    paddingRight: "2rem"
                                }}
                            >
                                <option value="es">ES</option>
                                <option value="en">EN</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
