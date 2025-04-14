import {Slide, Zoom} from "react-awesome-reveal";
import React from "react";

const Home = () => (
    <main className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <section className="card shadow border border-success bg-dark p-4">
            <div className="row align-items-center">
                <div className="col-md-5 text-center">
                    <Zoom>
                        <img
                            src="/images/logo.jpg"
                            alt="Alejandro Balaguer"
                            className="rounded-circle border border-success shadow img-fluid mb-3"
                            style={{ height: "180px" }}
                        />
                        <h1 className="text-success">Alejandro Balaguer Moroño</h1>
                        <p className="lead text-white">Desarrollador Web | IA & Big Data</p>
                    </Zoom>
                </div>

                <div className="col-md-7 text-white">
                    <Slide direction="right">
                        <p className="fs-5">
                            Bienvenido a mi web personal. Soy un desarrollador especializado en soluciones web modernas e inteligencia artificial.
                        </p>
                        <p className="fs-5">
                            Esta página es una carta de presentación directa para que puedas conocer rápidamente mi perfil profesional.
                        </p>

                        <div className="d-flex gap-3 mt-4 flex-wrap">
                            <a href="/proyectos" className="btn btn-outline-success">
                                Ver Proyectos
                            </a>
                            <a href="/curriculum" className="btn btn-success">
                                Ver Currículum
                            </a>
                        </div>

                        <blockquote className="mt-4 fst-italic">
                            “Transformando ideas en soluciones digitales.”
                        </blockquote>
                    </Slide>
                </div>
            </div>
        </section>
    </main>
);

export default Home;