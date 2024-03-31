import React from "react";

const ContactForm = () => {
  return (
    <>
      <form id="contact-form" onClick={(e) => e.preventDefault()} method="POST">
        <div className="row tp-gx-10">
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="name"
                type="text"
                placeholder="Nombres*"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="email"
                type="email"
                placeholder="Correo Electronico*"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="text"
                type="text"
                placeholder="Celular*"
                required
              />
            </div>
          </div>
          
          <div className="col-md-12">
            <div className="tp-contact-input">
              <textarea
                name="message"
                placeholder="Escribe tu mensaje aqui"
              ></textarea>
            </div>
          </div>
          <div className="tp-contact-btn mt-10">
            <button type="submit" className="tp-btn">
              Enviar Mensaje
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
