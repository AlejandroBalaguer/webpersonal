import {Fade} from "react-awesome-reveal";
import React, { useState } from "react";
import axios from 'axios';
import {useTranslation} from "react-i18next";

const Projects = () => {
    const [imagen, setImagen] = useState(null);
    const [resultado, setResultado] = useState(null);
    const [cargando, setCargando] = useState(false);
    const {t} = useTranslation();

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
                <h1 className="text-info text-center">{t('projects')}</h1>

                <h2 className="text-info">{t('classifier')}</h2>
                <p>
                    {t('classifierDesc')}
                </p>
                <p className="text-success"><b>{t('howToUse')}:</b></p>
                <p>
                    {t('howToUseText')}
                </p>
                <div className="mb-3">
                    <label htmlFor="image-upload" className="form-label">
                        {t('uploadImage')}:
                    </label>
                    <input 
                        type="file" 
                        id="image-upload"
                        className="form-control" 
                        accept="image/*"
                        aria-describedby="image-upload-help"
                        onChange={(e) => setImagen(e.target.files[0])} 
                    />
                </div>
                <button className="btn btn-success mt-3" onClick={handleSubmit}>{t('classify')}</button>

                {cargando && <p className="mt-3">{t('analyzing')}</p>}

                {resultado && (
                    <div className="mt-4">
                        <h4 className="text-success">{resultado.resultado}</h4>
                    </div>
                )}

                <p className="py-2">{t('repository')}: <a href="https://github.com/AlejandroBalaguer/CatsvsDogs">https://github.com/AlejandroBalaguer/CatsvsDogs</a></p>

                <div className="mt-5">
                    <h2 className="text-info mb-4">{t('webProjects')}</h2>
                    <div className="d-flex overflow-auto gap-4 py-3 px-2">
                        <a 
                            href="https://www.h-dalicante.es" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Sitio web de Harley Davidson Alicante"
                        >
                            <img src="/images/logoharley.png" alt="Harley Davidson" style={{ height: "150px" }} />
                        </a>
                        <a 
                            href="https://www.mgborjamotor.es" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Sitio web de MG Motor"
                        >
                            <img src="/images/logomg.png" alt="MG Motor" style={{ height: "150px" }} />
                        </a>
                        <a 
                            href="https://www.omodayjaecooborjamotor.es/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Sitio web de Omoda y Jaecoo"
                        >
                            <img src="/images/logoomodayjaecoo.png" alt="Omoda y Jaecoo" style={{ height: "150px" }} />
                        </a>
                        <a 
                            href="https://www.opelborjamotor.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Sitio web de Opel"
                        >
                            <img src="/images/logoopel.png" alt="Opel" style={{ height: "150px" }} />
                        </a>
                    </div>
                </div>
            </Fade>
        </main>

    );
}

export default Projects;