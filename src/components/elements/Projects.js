import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Chip,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { BsWordpress } from "react-icons/bs";
import { FaReact } from 'react-icons/fa'
import { TbBrandJavascript, TbBrandNextjs, TbBrandTypescript } from 'react-icons/tb'
import { motion } from 'framer-motion'
import React from "react";

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

export default function Project() {

    const myprojects = [
        {
            title: "Puntos Luz",
            image: "/images/PuntosLuz.png",
            description: "Tuve la oportunidad de ser responsable del soporte y mantenimiento de la aplicación web Puntos Luz. Colaboré en la reorganización de los endpoints y reconstrucción de los mismos para un mejor funcionamiento y corrección de errores, el frontend fue actualizado en pro de la experiencia de usuario.",
            skill: { language: "Javascript", framework: "Next js", icon: <TbBrandNextjs size={20} /> },
            url: "",
            seeMore: false
        },
        {
            title: "Tasa Poste",
            image: "/images/TasaPoste.png",
            description: "Colaboré en la creación de la aplicación web Tasa Poste, fui parte del equipo de desarrollo, cumpliendo funciones en la construcción del backend y frontend de la web. Realicé administracción de usuarios, login y creación de interfacez gráficas guíadas por la experiencia de usuario.",
            skill: { language: "Javascript", framework: "Next js", icon: <TbBrandNextjs size={20} /> },
            url: "",
            seeMore: false
        },
        {
            title: "Administrador de Tareas",
            image: "/images/TaskManager.png",
            description: "Proyecto de estudio, aprendí mucho sobre la administración de estados globales con redux toolkit, mejoré mis conocimientos en Tailwinds para la administración de temas, colores y estilos. El diseño está centrado en la creación rápida de tareas y el control de estados de la actividad.",
            skill: { language: "Javascript", framework: "React js", icon: <FaReact size={20} /> },
            url: "https://to-do-react-ms.netlify.app",
            seeMore: true
        },
        {
            title: "Administrador de Libros",
            image: "/images/FreeBook.png",
            description: "Proyecto de estudio para el manejo de libros, gestiona la lista de libros presentados a los usuarios en una galería y la colección personal de los usuarios. Aprendí a controlar la autenticación de usuarios con Auth0 con google, desde un correo gmail, al autenticarse el usario puede gestionar su propia galería, también utilicé Redux Toolkit.",
            skill: { language: "Javascript", framework: "React js", icon: <FaReact size={20} /> },
            url: "https://free-books-collection.netlify.app",
            seeMore: true
        },
        {
            title: "Incompany SA",
            image: "/images/Incompany.png",
            description: "Proyecto desarrollado para empresa costarricense Incompany SA, colaboré como freelancer, dando servicios profesionales en la creación de una nueva sección para el sitio web.  El sitio web fue creado con WordPress, utilizando una plantilla en Elementor.",
            skill: { language: "Wordpress", framework: "Wordpress", icon: <BsWordpress size={20} /> },
            url: "https://www.incompany.cr",
            seeMore: true
        },
        {
            title: "Simplisoft",
            image: "/images/Simplisoft.png",
            description: "Sitio web desarrollado para empresa costarricense Incompany. Brinde servicios profesionales como desarrollador web, realicé el diseño y construcción del sitio web utilizando elementor, siguiendo los líeanimientos gráfios dados por el cliente.",
            skill: { language: "Wordpress", framework: "Wordpress", icon: <BsWordpress size={20} /> },
            url: "https://simplisoftcr.com",
            seeMore: true
        },
        {
            title: "Feria Nacional de la Tierra",
            image: "/images/FeriaNacionalTierra.png",
            description: "Mi primera experiencia laboral, tuve la oportunidad de cumplir con 3 meses de pasantía en Jóvenes Ambientalista, logré crear un sitio web para Feria Nacional de la tierra, un sitio informativo sobre la feria, construido con Elementor.",
            skill: { language: "Wordpress", framework: "Wordpress", icon: <BsWordpress size={20} /> },
            url: "",
            seeMore: false
        },
        {
            title: "TakTik Mentor",
            image: "/images/Taktikmentor hero.png",
            description: "Colaboré con Taktik Mentor en el desarrollo de su presencia en línea mediante la creación de una landing page utilizando WordPress. Trabajando en estrecha colaboración con el equipo de Taktik Mentor, diseñé y desarrollé una página web que reflejara la identidad de la marca y proporcionara una experiencia de usuario óptima.",
            skill: { language: "Wordpress", framework: "Wordpress", icon: <BsWordpress size={20} /> },
            url: "https://taktikmentor.com/",
            seeMore: false
        },
        {
            title: "Restos para Desarrolladores",
            image: "/images/DevChallenges.png",
            description: "Relicé un sitio web para recopilar varios retos de https://devchallenges.io, finalizando tres retos, el primero es Qr Code, se encarga de generar códigos QR de un url que el usuario proporcione, el segundo es Random Quote, se encarga de generar citas de autores desde una consulta fetch a una api y el último es un Multi-Step form, formulario con varios pasos.",
            skill: { language: "Typescript", framework: "React Js", icon: <FaReact size={20} /> },
            url: "https://ms-dev-challenges.netlify.app",
            seeMore: true
        },
        {
            title: "Control de Deliverys",
            image: "/images/deliveryManager.png",
            description: "Proyecto de gestión de pedidos, use redux para la gestión global del estado de la aplicación, también la biblioteca DND-KIT para agregar la animación de ordenar manualmente las cajas de pedidos. Este proyecto me ayudó mucho en la interacción de pantallas de una forma fácil y ágil para  el usuario, dando al usuario atajos para ordenar sus pedidos.",
            skill: { language: "Typescript", framework: "React Js", icon: <FaReact size={20} /> },
            url: "https://deliverymanager.netlify.app",
            seeMore: true
        },
    ]


    const data = [
        {
            label: "Javascript",
            value: "Javascript",
            icon: <TbBrandJavascript size={20} color="blue-gray" />
        },
        {
            label: "Typescript",
            value: "Typescript",
            icon: <TbBrandTypescript size={20} color="blue-gray" />,
        },
        {
            label: "Wordpress",
            value: "Wordpress",
            icon: <BsWordpress size={20} color="blue-gray" />,
        }
    ];

    return (
        <section id="projects">
            <motion.section
                className="py-32"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                transition={{ type: "spring", delay: 1 }}
            >
                <div className="flex flex-col justify-center text-center">
                    <div className="grid place-items-center p-5 gap-5">
                        <Typography variant="h2" className="text-gray-800">Algunos proyectos</Typography>
                        <Typography className="text-gray-700">
                            Innovación y creatividad en cada línea de código: Mi viaje como ingeniero de sistemas y desarrollador web
                        </Typography>
                    </div>
                    <div className="grid place-items-center sm:p-5 lg:p-10">
                        <Tabs value="Javascript">
                            <TabsHeader>
                                {data.map(({ label, value, icon }, index) => (
                                    <Tab key={index} value={value}  >
                                        <div className="flex items-center gap-2" key={index}>
                                            {icon}
                                            {label}
                                        </div>
                                    </Tab>
                                ))}
                            </TabsHeader>
                            <TabsBody>
                                {data.map(({ value }, index) => (
                                    <TabPanel key={index} value={value}>
                                        <div className="grid grid-flow-row gap-8 my-10 lg:p-10 sm:p-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                                            {myprojects && myprojects?.filter(({ skill }) => value ? skill?.language.includes(value) : true)
                                                .map(({ title, image, description, skill, seeMore, url }, index) => (
                                                    <Card
                                                        key={index}
                                                        className="w-full rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500 sm:max-w-[44rem] md:max-w-[24rem]"
                                                    >
                                                        <CardHeader
                                                            floated={false}
                                                            shadow={false}
                                                            color="transparent"
                                                            className="m-0 rounded-none"
                                                        >
                                                            <img
                                                                src={image}
                                                                alt="proyects"
                                                                loading="lazy"
                                                                className=" h-52 w-full"
                                                            />
                                                        </CardHeader>
                                                        <CardBody>
                                                            <Typography variant="h4" color="blue-gray" className="text-start">
                                                                {title}
                                                            </Typography>
                                                            <Typography color="gray" className="mt-3 font-light text-start">
                                                                {description}
                                                            </Typography>
                                                        </CardBody>
                                                        <CardFooter className="flex items-end justify-between">
                                                            <Chip value={skill.framework} icon={skill.icon} />

                                                            {seeMore && (
                                                                <Button
                                                                    size="sm"
                                                                    className=" bg-orange-500"
                                                                    onClick={() => window.open(url, '_blank')}
                                                                >
                                                                    Ver más
                                                                </Button>
                                                            )}
                                                        </CardFooter>
                                                    </Card>
                                                ))}
                                        </div>
                                    </TabPanel>
                                ))}
                            </TabsBody>
                        </Tabs>
                    </div>
                </div>
            </motion.section>
        </section>
    )
}




