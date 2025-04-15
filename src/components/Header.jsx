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
                <ul className="navbar-nav ms-auto d-flex flex-row gap-3 align-items-center">
                    <li className="nav-item"><a className="nav-link" href="/curriculum">CV</a></li>
                    <li className="nav-item"><a className="nav-link" href="/proyectos">{t('seeProjects')}</a></li>
                    <li className="nav-item"><a className="nav-link" href="/contacto">{t('contact')}</a></li>
                    <li className="nav-item">
                        <select className="form-select bg-dark text-light border-success" onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
                            <option value="es">ES</option>
                            <option value="en">EN</option>
                        </select>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
