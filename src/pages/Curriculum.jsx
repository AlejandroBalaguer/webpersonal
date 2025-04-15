import {Slide, Zoom} from "react-awesome-reveal";
import React from "react";
import { useTranslation } from "react-i18next";

const Curriculum = () => {
    const {t} = useTranslation();
    return (
        <main className="container py-5">
            <section id="home" className="text-center py-5 px-5">
                <Zoom>
                    <img src="/images/logo.jpg" alt="Foto" className="rounded-circle border border-success mt-3 img-fluid" style={{ height: "300px" }}/>
                    <h1 className="text-success display-3">{t('name')}</h1>
                    <p className="lead">{t('role')}</p>
                    <a
                        href="/cv.pdf"
                        download
                        className="btn btn-outline-success mt-3"
                    >
                        {t('downloadCV')}
                    </a>
                </Zoom>
            </section>
            <section id="about" className="container py-5">
                <Slide direction="left">
                    <h2 className="text-info">{t('about')}</h2>
                    <p className="fst-italic">{t('aboutText')}</p>
                </Slide>
            </section>
            <section id="experience" className="container py-5">
                <Slide direction="right">
                    <h2 className="text-info">{t('experience')}</h2>
                    <ul className="list-unstyled">
                        <li><strong className="text-success">Borjamotor S.A.</strong> - Desarrollo web - 2025 - Presente</li>
                        <li><strong className="text-success">Grupo SpaServ</strong> - Administrador de sistemas - 2023 - 2024</li>
                    </ul>
                </Slide>
            </section>
            <section id="education" className="container py-5">
                <Slide direction="left">
                    <h2 className="text-info">{t('education')}</h2>
                    <ul className="list-unstyled">
                        <li><strong className="text-success">Especializacion GS - Desarrollo IA y Big Data</strong> - IES San Vicente - 2025 - 2026</li>
                        <li><strong className="text-success">FPGS - Desarollo de Aplicaciones Web</strong> - IES Mare Nostrum - 2023 - 2025</li>
                        <li><strong className="text-success">FPGM - Sistemas microinformaticos y redes</strong> - IES Mare Nostrum - 2021 - 2023</li>
                    </ul>
                </Slide>
            </section>
            <section id="skills" className="container py-5">
                <Zoom>
                    <h2 className="text-info">{t('skills')}</h2>
                    <ul className="list-unstyled">
                        <li><strong className="text-success">{t('languages')}:</strong> JavaScript, Python, HTML, CSS</li>
                        <li><strong className="text-success">Frameworks:</strong> React, Node.js, Express</li>
                        <li><strong className="text-success">{t('softSkills')}:</strong> {t('softSkillsContent')}</li>
                    </ul>
                </Zoom>
            </section>
        </main>
    );
}

export default Curriculum;