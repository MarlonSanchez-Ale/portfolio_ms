import {
    Typography,
} from "@material-tailwind/react";
import { Player } from "@lottiefiles/react-lottie-player";
import '../../App.css';
import { BsDownload } from "react-icons/bs";
import React from "react";
import { motion, MotionConfig } from 'framer-motion'

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 0,
    },
    animate: {
        opacity: 1,
        y: -50,

    }
}


export default function AboutSection() {

   /* function descargarPDF() {
        // Ruta al archivo PDF dentro de la carpeta "public"
        const rutaPDF = '/doc/CV - MARLON SÁNCHEZ.pdf';

        // Crea una URL para el archivo PDF
        const urlPDF = process.env.PUBLIC_URL + rutaPDF;

        // Crea una solicitud para obtener el archivo PDF
        fetch(urlPDF)
            .then((response) => response.blob())
            .then((blob) => {
                // Crea un objeto URL para el blob
                const url = window.URL.createObjectURL(blob);

                // Crea un enlace invisible para descargar el PDF
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = 'CV - MARLON SANCHEZ.pdf'; // Nombre de archivo sugerido

                // Agrega el enlace al DOM y haz clic en él
                document.body.appendChild(a);
                a.click();

                // Limpia el objeto URL y elimina el enlace
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            })
            .catch((error) => {
                console.error('Error al descargar el PDF:', error);
            });
    }*/


    return (
        <MotionConfig transition={{ duration: 1 }}>
            <section className=" py-40 bg-white sm:px-10">
                <motion.div
                    className="flex flex-col justify-center gap-3 text-center"
                    layoutScroll
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{ type: "spring", delay: 1 }}
                >
                    <Typography variant="h2" className="text-gray-700">
                        ¿Quién soy?
                    </Typography>
                    <div className="container mx-auto md:px-20 my-10">
                        <div className="grid md:grid-cols-2 gap-10">
                            <div className="image">
                                <Player
                                    autoplay
                                    loop
                                    src="https://lottie.host/6ccad8b3-8249-4325-8b24-67342e8043f1/1Jb0tjDqoJ.json"
                                    style={{ height: '400px', width: '350px' }}
                                />
                            </div>
                            <div className="flex flex-col justify-center gap-5">
                                <Typography variant="h5" className="text-gray-700 text-left">
                                    ¿Buscas llevar tu presencia en línea al siguiente nivel?
                                </Typography>
                                <div className="flex flex-col justify-start gap-5">
                                    <Typography className="text-orange-500 text-start">
                                        ¡Déjame ayudarte!
                                    </Typography>
                                    <Typography color="gray" className="font-normal text-gray-600 text-start">
                                        ¡Hola! Soy Marlon Sánchez, con una sólida formación en ingeniería de sistemas
                                        y una amplia experiencia en el desarrollo web, me esfuerzo por crear soluciones digitales que no solo sean funcionales y eficientes,
                                        sino también estéticamente atractivas y fáciles de usar.
                                    </Typography>
                                    <Typography color="gray" className="font-normal text-gray-600 text-start">
                                        Mi enfoque es la innovación y la calidad, comprometido a brindarte un servicio personalizado que cumpla con tus necesidades y objetivos.
                                        Ya sea que estés lanzando tu primera página web o buscando optimizar una aplicación existente, estoy aquí para hacer que tu visión cobre vida
                                        en el mundo digital.
                                    </Typography>
                                    <Typography color="gray" className="font-normal text-gray-600 text-start">
                                        ¡Contacta conmigo hoy mismo para comenzar tu viaje hacia una presencia en línea impactante y efectiva!
                                        Juntos, podemos construir algo verdaderamente extraordinario.
                                    </Typography>
                                    <div>
                                        <a
                                            href="#contact"
                                            className="group relative flex w-64 h-12 rounded-md items-center gap-3 overflow-hidden p-3 text-gray-200 bg-blue-gray-700">
                                            Hablemos tu idea
                                            <span className="absolute right-0 grid h-full w-12 place-items-center bg-blue-gray-800 text-gray-200 transition-colors group-hover:bg-blue-gray-900">
                                                <BsDownload size={25} />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </section>
        </MotionConfig>
    )
}