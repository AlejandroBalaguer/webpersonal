import {Slide, Zoom} from "react-awesome-reveal";
import React from "react";

const Home = () => (
    <main className="container py-5">
        <section id="home" className="text-center py-5 px-5">
            <Zoom>
                <h1 className="text-success display-3">Alejandro Balaguer Moroño</h1>
                <p className="lead">Desarrollador Web | Desarrollador IA | Big Data</p>
                <img src="/images/logo.jpg" alt="Foto" className="rounded-circle border border-success mt-3 img-fluid" />
            </Zoom>
        </section>
        <section id="about" className="container py-5">
            <Slide direction="left">
                <h2 className="text-info">Sobre mí</h2>
                <p className="fst-italic">Soy un desarrollador apasionado por la tecnología, especializado en crear soluciones web modernas, eficientes y visualmente atractivas.</p>
            </Slide>
        </section>
        <section id="experience" className="container py-5">
            <Slide direction="right">
                <h2 className="text-info">Experiencia</h2>
                <ul className="list-unstyled">
                    <li><strong>Borjamotor S.A.</strong> - Desarrollo web - 2025 - Presente</li>
                    <li><strong>Grupo SpaServ</strong> - Administrador de sistemas - 2023 - 2024</li>
                </ul>
            </Slide>
        </section>
        <section id="education" className="container py-5">
            <Slide direction="left">
                <h2 className="text-info">Educación</h2>
                <ul className="list-unstyled">
                    <li><strong>Especializacion GS - Desarrollo IA y Big Data</strong> - IES San Vicente - 2025 - 2026</li>
                    <li><strong>FPGS - Desarollo de Aplicaciones Web</strong> - IES MARE NOSTRUM - 2023 - 2025</li>
                    <li><strong>FPGM - Sistemas microinformaticos y redes</strong> - IES MARE NOSTRUM - 2021 - 2023</li>
                </ul>
            </Slide>
        </section>
        <section id="skills" className="container py-5">
            <Zoom>
                <h2 className="text-info">Habilidades</h2>
                <ul className="list-unstyled">
                    <li>Lenguajes: JavaScript, Python, HTML, CSS</li>
                    <li>Frameworks: React, Node.js, Express</li>
                    <li>Soft skills: Comunicación, liderazgo</li>
                </ul>
            </Zoom>
        </section>
    </main>
);

export default Home;