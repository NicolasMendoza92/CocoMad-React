import Aos from 'aos';
import "aos/dist/aos.css";
import React from 'react'
import { useEffect } from 'react';

export const Historia = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    return (
        <>
        <div className="row gx-3 gy-2 p-3 about d-none d-lg-block">
            <h2 data-aos="fade-up" className="text-center">¿Como empezamos?</h2>
            <div data-aos="fade-up" className='text-center'>
                <p> <b>Somos dos hermanas Lu y Coni  :) </b> </p>
            </div>
            <div data-aos="fade-up">
                <p> Luciana emigró a España en el 2017 para estudiar un máster en busca de mejorar sus estudios académicos. Decidió emprender con la tienda a fines del 2019, dando así inicio a CocoMad el 30 de diciembre de dicho año. La tienda era muy pequeña y estaba ubicada en el barrio de La Guindalera. El objetivo era enamorar el público madrileño y a todo aquel que viva en Madrid a través de los <a href="https://es.wikipedia.org/wiki/Alfajor_(Latinoam%C3%A9rica)#:~:text=Esta%20variedad%20se%20compone%20de,de%20chocolate%20y%20diferentes%20rellenos." target="_blank" rel="noreferrer">alfajores</a>, del dulce de leche y otros sabores típicos argentinos. 
                </p>
            </div>
            <div data-aos="fade-up" >
                <p> A principios del 2020 y con el inicio de la pandemia, comenzaron los repartos por todo Madrid para poder llevar alfajores, brownies y otros productos con el fin de que el encierro sea más ameno. Así es como se fue creando una comunidad de #CocoFans que esperaban todas las semanas sus alfajores para disfrutar en casa. Luego de la cuarentena y al abrirse las tiendas al público, muchos comenzaron a visitar CocoMad y a conocer a Luciana en persona. La tienda empezó a crecer y a hacerse más conocida, por lo cuál se necesitaba más ayuda. 
                </p>
            </div>
            <div data-aos="fade-up">
                <p>Constanza, decidió mudarse a Madrid en marzo del 2021 para poder trabajar mano a mano en la tienda y ayudar a que los alfajores lleguen cada vez a más gente en la ciudad. Esta sociedad de hermanas, amigas y colegas empezó a forjar un nuevo camino para poder dar un paso más y cambiarnos a una tienda de mayor tamaño que aparte de tener ricos productos, también pueda incluir un servicio de cafetería de primer nivel.
                </p>
            </div>
        </div>
        
        <div className="row gx-3 gy-2 p-3 about d-none d-lg-block">
            <h2 data-aos="fade-up" className="text-center">¿Por qué CocoMad?</h2>
            <div data-aos="fade-up" >
                <p>  El nombre surgió en una reunión con dos amigas. Empezamos a darle forma y a aportar diferentes ideas, mezclas, palabras hasta que finalmente quedó CocoMad como el elegido.</p>
            </div>
            <div data-aos="fade-up">
                <p> Coco es por el coco rallado, ya que el producto más vendido es el alfajor de maizena que alrededor tiene Coco. Mad es por Madrid, ya que sería la ciudad en donde empezaría la tienda. 
                </p>
            </div>
        </div>
        </>
    )
}
