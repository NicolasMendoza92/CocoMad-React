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
            <h2 data-aos="fade-up" className="text-center">¿Como empezamos?</h2>
            <div data-aos="fade-up" className="p-2">
                <p> ♥️Como muchos de vosotros sabéis, este proyecto lo empecé por el 2019... (Lu).
                    Pero tuvo una nueva incorporación cuando en el 2021 llegó Coni, mi hermana, para acompañarme y ayudarme a que este emprendimiento siga creciendo y llevando alegría por medio de nuestros productos a todos los que nos eligen día a día 🤩.</p>
            </div>
            <div data-aos="fade-up" className="p-2">
                <p> Hoy somos socias 🤩. Cada dia nos esforzamos para mantener nuestro negocio con alegria y buena disposicion.
                </p>
            </div>
        </div>
    )
}
