import React from 'react';
import AngleArrow from '@/src/svg/angle-arrow';
import LineArrowTwo from '@/src/svg/line-arrow-2';
import portfolio_data from '@/src/data/portfolio-data';
import Link from 'next/link';


import shape_img from "@assets/img/testimonial/shape-1.png";
import bg_img from "@assets/img/testimonial/testimonial-bg.jpg";
import Image from 'next/image';

const setting =  {
    slidesPerView: 3,
    spaceBetween: 30, 
    loop: true,
    centeredSlides: true,
    breakpoints: {
        '991': {
        },
        '768': {
            slidesPerView:2,
        },
        '767': {
            slidesPerView:1,
            spaceBetween:15,
        },
        '576': {
            slidesPerView:1,
        },
        '0': {
            slidesPerView:1,
        },
        },
    }



const TestimonialArea = () => {    

    return (
        <> 

           
         <section className="tp-portfolio-area pt-120 pb-60">
         <section className="tp-testimonial-area p-relative pb-55">
            <div className="container container-large">
               <div className="tp-testimonial-shape">
                  <Image src={shape_img} alt="theme-pure" />
               </div>
               <div className="tp-testimonial-bg">
                  <Image src={bg_img} alt="theme-pure" />
               </div>
               <div className="row">
                  <div className="col-lg-12">
                     <div className="tp-testimonial-title-wrapper text-center">
                        <span className="tp-section-title__pre">
                           Binex <span className="title-pre-color">Educación Continua
                           </span>
                           <AngleArrow /> 
                        </span>
                        <h3 className="tp-section-title">Descubre nuestros <span className="title-color">Cursos</span>
                        
                           <span className="title-center-shape"> 
                                 <LineArrowTwo />
                           </span> 
                        </h3>
                     </div>
                  </div>
                  
               </div>
            </div>
         </section> 
            <div className="container">
               <div className="row wow fadeInUp">
                {portfolio_data.map((item, i) => 
                    <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                        <div className="tp-portfolio-item-wrapper">
                        <div className="tp-portfolio-item-thumb">
                            <Image src={item.img} alt="theme-pure" />
                        </div>
                        <div className="tp-portfolio-item-content">
                            <span className="tp-portfolio-item-subtitle">{item.catagory}</span>
                            <h3 className="tp-portfolio-item-title">
                                <Link href="/portfolio-details">{item.title}</Link></h3>
                            <div className="tp-portfolio-item-content-btn">
                                <Link href="/portfolio-details">View Projects 
                                    <i className="fa-regular fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                )} 
               </div>
            </div>
         </section>
        </>
    );
};

export default TestimonialArea;