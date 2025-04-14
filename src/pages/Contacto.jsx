import {Fade} from "react-awesome-reveal";
import React from "react";

const Contact = () => (
    <main id="contact" className="container py-5 bg-gray-100">
        <Fade cascade damping={0.2}>
            <h1 className="text-info text-center">Contacto</h1>

            <p>
                Si necesitas contactar conmigo, tanto para trabajo como para proyectos, aquí abajo te dejo mi correo, mi teléfono
                y además un formulario que puedes rellenar que llegará directamente a mi.
            </p>

            <p>
                Responderé lo antes posible, por favor sed pacientes.
            </p>

            <p>
                <i className="bi bi-envelope-fill me-2"></i>
                Email: <a href="mailto:alejandrobalaguerm@gmail.com" className="text-decoration-none text-success">
                alejandrobalaguerm@gmail.com
            </a>
            </p>

            <p>
                <i className="bi bi-telephone-fill me-2"></i>
                Teléfono: <a href="tel:601355529" className="text-decoration-none text-success">601355529</a>
            </p>

            <p>
                <i className="bi bi-share-fill me-2"></i>
                Redes sociales:
            </p>

            <div className="d-flex gap-3 mb-4">
                <a href="https://www.instagram.com/aleexbalaguer" target="_blank" rel="noreferrer" className="text-success fs-3">
                    <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/tuusuario" target="_blank" rel="noreferrer" className="text-success fs-3">
                    <i className="bi bi-linkedin"></i>
                </a>
            </div>

            <form action="https://formsubmit.co/alejandrobalaguerm@gmail.com" method="POST">
                <input type="hidden" name="_captcha" value="false" />
                <div className="mb-3">
                    <label className="form-label">Correo</label>
                    <input type="email" name="email" className="form-control bg-dark text-light border-success" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Mensaje</label>
                    <textarea name="message" className="form-control bg-dark text-light border-success" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-success">Enviar</button>
            </form>
        </Fade>
    </main>
);

export default Contact;