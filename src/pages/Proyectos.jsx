import {Fade} from "react-awesome-reveal";
import React from "react";

const Projects = () => (
    <section id="projects" className="container py-5">
        <Fade cascade damping={0.2}>
            <h2 className="text-info">Proyectos</h2>
            <ul className="list-unstyled">
                <li><a href="https://github.com/tuusuario/proyecto1" target="_blank" rel="noreferrer" className="text-decoration-none text-success">Proyecto 1</a> - Descripción breve</li>
                <li><a href="https://github.com/tuusuario/proyecto2" target="_blank" rel="noreferrer" className="text-decoration-none text-success">Proyecto 2</a> - Descripción breve</li>
            </ul>
        </Fade>
    </section>
);

export default Projects;