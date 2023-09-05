import {
    Typography,
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Button
} from "@material-tailwind/react";
import { Player } from "@lottiefiles/react-lottie-player";
import '../../App.css';
import { BsDownload, BsCheckCircle } from "react-icons/bs";
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

    function descargarPDF() {
        // Ruta al archivo PDF dentro de la carpeta "public"
        const rutaPDF = '/doc/cv.pdf';

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
    }


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
                    <Typography variant="h2" className="text-gray-800">About me</Typography>
                    <div className="container mx-auto md:px-20 my-10">
                        <div className="grid md:grid-cols-2 gap-10">
                            <div className="image">
                                <Player
                                    autoplay
                                    loop
                                    src="https://lottie.host/6ccad8b3-8249-4325-8b24-67342e8043f1/1Jb0tjDqoJ.json"
                                    style={{ height: '250px', width: '350px' }}
                                />
                            </div>
                            <Timeline>
                                <TimelineItem>
                                    <TimelineConnector />
                                    <TimelineHeader>
                                        <TimelineIcon className="p-0">
                                            <BsCheckCircle size={30} color="orange" />
                                        </TimelineIcon>
                                        <Typography variant="h5" className="text-gray-700">
                                            Need Web Developer?
                                        </Typography>
                                    </TimelineHeader>
                                    <TimelineBody className="pb-8">
                                        <div className="flex flex-col gap-5">
                                            <div>
                                                <Typography className="text-orange-500 text-start">
                                                    I can help you!
                                                </Typography>
                                                <Typography color="gary" className="font-normal text-gray-600 text-start">
                                                    I'm a Systems Engineer graduated from the National University of Engineering, Nicaragua, passionate about web development with an emphasis on the front-end and willing to keep learning.
                                                    I'm characterized by being a disciplined, responsible and dedicated person.
                                                </Typography>
                                            </div>
                                            <div>
                                                <Button
                                                    size="lg"
                                                    className="group relative flex items-center gap-3 overflow-hidden pr-[72px] bg-blue-gray-700"
                                                    onClick={descargarPDF}
                                                >
                                                    Download CV
                                                    <span className="absolute right-0 grid h-full w-12 place-items-center bg-blue-gray-800 transition-colors group-hover:bg-blue-gray-900">
                                                        <BsDownload size={25} />
                                                    </span>
                                                </Button>
                                            </div>
                                        </div>
                                    </TimelineBody>
                                </TimelineItem>
                            </Timeline>
                        </div>
                    </div>
                </motion.div>
            </section>
        </MotionConfig>
    )
}

