import Aos from 'aos';
import "aos/dist/aos.css";
import React from 'react'
import { useEffect } from 'react';

export const Historia = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    return (
        <div className="row gx-3 gy-2 p-3 about d-none d-lg-block">
            <h2  data-aos="fade-up" className="text-center">¿Como empezamos?</h2>
            <div  data-aos="fade-up" className="p-2">
                <h5> ♥️Como muchos de vosotros sabéis, este proyecto lo empecé hace más de un laaargo año... (Lu).
                    Pero tuvo una nueva incorporación cuando hace un mes atrás llegó Coni, mi hermana, para acompañarme y ayudarme a que este emprendimiento siga creciendo y llevando alegría por medio de nuestros productos a todos los que nos eligen día a día 🤩.</h5>
            </div>
            <div  data-aos="fade-up" className="p-2">
                <h5> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vitae iste dolore sint. Deleniti natus reprehenderit ipsa quidem quibusdam, sint nobis distinctio laboriosam. Distinctio officia laborum molestias inventore quas quae? </h5>
            </div>
        </div>
    )
}
