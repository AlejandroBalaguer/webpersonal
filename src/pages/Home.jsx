import { Zoom } from "react-awesome-reveal";
import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();

    return (
        <main className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <section className="card shadow border border-success bg-dark p-4">
                <div className="row align-items-center">
                    <div className="col-md-5 text-center">
                        <Zoom>
                            <img
                                src="/images/unnamed.jpg"
                                alt={t('name')}
                                className="rounded-circle border border-success shadow img-fluid mb-3"
                                style={{ height: "180px" }}
                            />
                            <h1 className="text-success">{t('name')}</h1>
                            <p className="lead text-white">{t('role')}</p>
                        </Zoom>
                    </div>

                    <div className="col-md-7 text-white">
                        <Zoom>
                            <p className="fs-5">{t('homeIntro1')}</p>
                            <p className="fs-5">{t('homeIntro2')}</p>

                            <div className="d-flex gap-3 mt-4 flex-wrap">
                                <a href="/proyectos" className="btn btn-outline-success">{t('seeProjects')}</a>
                                <a href="/curriculum" className="btn btn-success">{t('seeCV')}</a>
                            </div>

                            <blockquote className="mt-4 fst-italic">
                                “{t('quote')}”
                            </blockquote>
                        </Zoom>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
