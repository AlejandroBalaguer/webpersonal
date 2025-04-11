import {Fade} from "react-awesome-reveal";
import React from "react";

const Contact = () => (
    <section id="contact" className="container py-5 bg-gray-100">
        <Fade direction="up">
            <h2 className="text-info">Contacto</h2>
            <p>Email: <span className="text-success">tuemail@ejemplo.com</span></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noreferrer" className="text-decoration-none text-success">linkedin.com/in/tuusuario</a></p>
            <form>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control bg-dark text-light border-success" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Mensaje</label>
                    <textarea className="form-control bg-dark text-light border-success" rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-success">Enviar</button>
            </form>
        </Fade>
    </section>
);

export default Contact;