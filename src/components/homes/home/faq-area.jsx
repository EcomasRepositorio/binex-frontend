import React, { useState } from 'react';
import ContactForm from '@/src/forms/contact-form'; 
import EmailIconOne from '@/src/svg/email-icon-1';
import PhoneIcon from '@/src/svg/phone-icon';

const FaqArea = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    function handleClick(index) {
      setActiveIndex(index === activeIndex ? null : index);
    }

    return (
        <>
             <section className="tp-contact-area pt-120 pb-90">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-contact-wrapper">
                            <div className="tp-contact-title-wrapper">
                            <h3 className="tp-contact-title">Contáctate <span className="title-color">con nosotros</span></h3> 
                            <p>Email, call, or complete the form to learn how Kion can <br /> 
                             solve your cloud management and governance cha.</p>-
                            </div>
                            <div className="tp-contact-content">
                            <div className="tp-contact-content-mail d-flex align-items-center">
                                <div className="tp-contact-content-mail-icon">
                                    <span> 
                                        <EmailIconOne /> 
                                    </span>
                                </div>
                                <h3 className="tp-contact-item-title"><a href="mailto:capacitaciones@binex.edu.pe">capacitaciones@binex.edu.pe</a></h3>
                            </div>
                            <div className="tp-contact-content-phone d-flex align-items-center">
                                <div className="tp-contact-content-phone-icon">
                                    <span>
                                        <PhoneIcon /> 
                                    </span>
                                </div>
                                <h3 className="tp-contact-item-title">
                                    <a href="https://api.whatsapp.com/send?phone=51921814045" target='_blank'>+51 921 814 045</a>
                                </h3>
                            </div>
                            
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-contact-form">
                            <h3 className="tp-contact-form-title">Escríbenos!</h3>
                     
                            <ContactForm /> 
                            <p className="ajax-response"></p>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
};

export default FaqArea;