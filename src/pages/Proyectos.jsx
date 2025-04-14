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
        <main id="projects" className="container py-5" style={{ minHeight: "100vh" }}>
            <Fade cascade damping={0.1}>
                <h1 className="text-info text-center">Proyectos</h1>

                <h2 className="text-info">Clasificador de Perros y Gatos</h2>
                <p>
                    Esta es una IA sencilla que clasifica la imagen que le pases aquí abajo, y te dirá si es un gato
                    o un perro. Tiene una precisión del +90%, todavía sigue en desarrollo.
                </p>
                <p className="text-success"><b>Funcionamiento:</b></p>
                <p>
                    Solamente tienes que introducir tu imagen dando click en seleccionar archivo y después dar click
                    en el botón "Clasificar". Y en poco tiempo te lo clasificará.
                </p>
                <input type="file" onChange={(e) => setImagen(e.target.files[0])} />
                <button className="btn btn-success mt-3" onClick={handleSubmit}>Clasificar</button>

                {cargando && <p className="mt-3">Analizando imagen...</p>}

                {resultado && (
                    <div className="mt-4">
                        <h4 className="text-success">{resultado.resultado}</h4>
                    </div>
                )}

                <p className="py-2">Repositorio: <a href="https://github.com/AlejandroBalaguer/CatsvsDogs">https://github.com/AlejandroBalaguer/CatsvsDogs</a></p>

                <div className="mt-5">
                    <h2 className="text-info mb-4">Páginas web en las que he trabajado</h2>
                    <div className="d-flex overflow-auto gap-4 py-3 px-2">
                        <a href="https://www.h-dalicante.es" target="_blank" rel="noopener noreferrer">
                            <img src="/images/logoharley.png" alt="Harley Davidson" style={{ height: "150px" }} />
                        </a>
                        <a href="https://www.mgborjamotor.es" target="_blank" rel="noopener noreferrer">
                            <img src="/images/logomg.png" alt="MG Motor" style={{ height: "150px" }} />
                        </a>
                        <a href="https://www.omodayjaecooborjamotor.es/" target="_blank" rel="noopener noreferrer">
                            <img src="/images/logoomodayjaecoo.png" alt="Omoda y Jaecoo" style={{ height: "150px" }} />
                        </a>
                        <a href="https://www.opelborjamotor.com/" target="_blank" rel="noopener noreferrer">
                            <img src="/images/logoopel.png" alt="Opel" style={{ height: "150px" }} />
                        </a>
                    </div>
                </div>
            </Fade>
        </main>

    );
}

export default Projects;