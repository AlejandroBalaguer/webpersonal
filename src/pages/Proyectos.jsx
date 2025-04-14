import {Fade} from "react-awesome-reveal";
import React, { useState } from "react";
import axios from 'axios';

const Projects = () => {
    const [imagen, setImagen] = useState(null);
    const [resultado, setResultado] = useState(null);
    const [cargando, setCargando] = useState(false);

    const handleSubmit = async () => {
        if (!imagen) return;

        const formData = new FormData();
        formData.append("file", imagen);

        setCargando(true);
        const response = await axios.post("http://localhost:8000/predict", formData);
        setResultado(response.data);
        setCargando(false);
    };

    return(
        <section id="projects" className="container py-5">
            <Fade cascade damping={0.2}>
                <h1 className="text-info">Proyectos</h1>
                <h2 className="text-info">Clasificador de Perros y Gatos</h2>
                <input type="file" onChange={(e) => setImagen(e.target.files[0])} />
                <button className="btn btn-success mt-3" onClick={handleSubmit}>Clasificar</button>

                {cargando && <p className="mt-3">Analizando imagen...</p>}

                {resultado && (
                    <div className="mt-4">
                        <h4 className="text-success ">{resultado.resultado}</h4>
                    </div>
                )}
            </Fade>
        </section>
    );
}

export default Projects;