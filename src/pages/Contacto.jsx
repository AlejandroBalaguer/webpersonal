import {Fade} from "react-awesome-reveal";
import React from "react";
import {useTranslation} from "react-i18next";

const Contact = () => {
    const {t} = useTranslation();
    return(
        <main id="contact" className="container py-5 bg-gray-100" style={{ minHeight: "100vh" }}>
            <Fade cascade damping={0.1}>
                <h1 className="text-info text-center">{t('contact')}</h1>

                <p>
                    {t('contactIntro')}
                </p>

                <p>
                    {t('responseNote')}
                </p>

                <p>
                    <i className="bi bi-envelope-fill me-2"></i>
                    {t('email')}: <a href="mailto:alejandrobalaguerm@gmail.com" className="text-decoration-none text-success">
                    alejandrobalaguerm@gmail.com
                </a>
                </p>

                <p>
                    <i className="bi bi-telephone-fill me-2"></i>
                    {t('phone')}: <a href="tel:601355529" className="text-decoration-none text-success">601355529</a>
                </p>

                <p>
                    <i className="bi bi-share-fill me-2"></i>
                    {t('socials')}:
                </p>

                <div className="d-flex gap-3 mb-4">
                    <a 
                        href="https://www.instagram.com/aleexbalaguer" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-success fs-3"
                        aria-label="Instagram"
                    >
                        <i className="bi bi-instagram" aria-hidden="true"></i>
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/alejandro-balaguer-moroño" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-success fs-3"
                        aria-label="LinkedIn"
                    >
                        <i className="bi bi-linkedin" aria-hidden="true"></i>
                    </a>
                    <a 
                        href="https://github.com/AlejandroBalaguer" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-success fs-3"
                        aria-label="GitHub"
                    >
                        <i className="bi bi-github" aria-hidden="true"></i>
                    </a>
                </div>
                
                <form action="https://formsubmit.co/alejandrobalaguerm@gmail.com" method="POST">
                    <input type="hidden" name="_captcha" value="false" />
                    <div className="mb-3">
                        <label htmlFor="email-input" className="form-label">{t('email')}</label>
                        <input 
                            id="email-input"
                            type="email" 
                            name="email" 
                            className="form-control bg-dark text-light border-success" 
                            required 
                            aria-describedby="email-help"
                        />
                        <div id="email-help" className="form-text">
                            {t('emailPrivacy')}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message-input" className="form-label">{t('message')}</label>
                        <textarea 
                            id="message-input"
                            name="message" 
                            className="form-control bg-dark text-light border-success" 
                            rows="4" 
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-success">{t('send')}</button>
                </form>
            </Fade>
        </main>
    );
}

export default Contact;