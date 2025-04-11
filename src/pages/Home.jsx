import {Slide, Zoom} from "react-awesome-reveal";
import React from "react";

const Home = () => (
    <main className="container py-5 bg-black">
        <section id="home" className="text-center py-5 px-5">
            <Zoom>
                <h1 className="text-success display-3">Tu Nombre</h1>
                <p className="lead">Desarrollador Web | Programador | Freelancer</p>
                <img src="https://via.placeholder.com/120" alt="Foto" className="rounded-circle border border-success mt-3" />
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
                    <li><strong>Freelancer</strong> - Desarrollo de sitios web - 2022 - Presente</li>
                    <li><strong>Startup X</strong> - Frontend Developer - 2021 - 2022</li>
                </ul>
            </Slide>
        </section>
        <section id="education" className="container py-5">
            <Slide direction="left">
                <h2 className="text-info">Educación</h2>
                <ul className="list-unstyled">
                    <li><strong>Universidad de la Tecnología</strong> - Ingeniería en Sistemas - 2017 - 2021</li>
                    <li><strong>Curso Full Stack</strong> - Academia Online - 2022</li>
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