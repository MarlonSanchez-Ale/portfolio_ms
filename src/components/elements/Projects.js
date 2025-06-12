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
import { FaReact, FaAngular } from 'react-icons/fa'
import { HiBriefcase } from 'react-icons/hi';
import { TbBrandNextjs } from 'react-icons/tb'
import { FaUserTie, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion'
import { SiAstro } from "react-icons/si";

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
            title: "GoLoyalty",
            image: "/images/goloyalty.png",
            description: "Líder de proyecto y encargado del frontend de la plataforma GoLoyalty, tuve a cargo la actualización del proyecto frontend en sus versiones de Angular, también del rediseño de la plataforma y mantenimiento.",
            skill: { framework: "Angular", icon: <FaAngular size={20} /> },
            seeMore: false,
            category: "profesional",
            rol: "GoDigital - Líder de proyecto/Desarrollador"
        },
        {
            title: "Ruleta Pronto",
            image: "/images/ruletapronto.png",
            description: "Líder de proyecto y encargado del frontend de la plataforma GoLoyalty, tuve a cargo la actualización del proyecto frontend en sus versiones de Angular, también del rediseño de la plataforma y mantenimiento.",
            skill: { framework: "Astro", icon: <SiAstro size={20} /> },
            seeMore: false,
            category: "profesional",
            rol: "GoDigital - Líder de proyecto/Desarrollador"
        },
        {
            title: "Génerador de Códigos de descuento",
            image: "/images/codigo.png",
            description: "Desarrollé un generador de códigos de descuenta para campaña de marketing digital, plataforma que ayudó a captar clientes y fidelizarlos. Proyecto escalable y de importante impacto para campañas promocionales",
            skill: { framework: "Next js", icon: <FaReact size={20} /> },
            seeMore: false,
            category: "servicio",
            rol: "Sinfonía Digital - Líder de desarrollo"
        },
        {
            title: "Puntos Luz",
            image: "/images/PuntosLuz.png",
            description: "Tuve la oportunidad de ser responsable del soporte y mantenimiento de la aplicación web Puntos Luz. Colaboré en la reorganización de los endpoints y reconstrucción de los mismos para un mejor funcionamiento y corrección de errores, el frontend fue actualizado en pro de la experiencia de usuario.",
            skill: { framework: "Next js", icon: <TbBrandNextjs size={20} /> },
            url: "",
            seeMore: false,
            rol: "The Data Age - Líder de proyecto",
            category: "profesional"
        },
        {
            title: "Tasa Poste",
            image: "/images/TasaPoste.png",
            description: "Colaboré en la creación de la aplicación web Tasa Poste, fui parte del equipo de desarrollo, cumpliendo funciones en la construcción del backend y frontend de la web. Realicé administracción de usuarios, login y creación de interfacez gráficas guíadas por la experiencia de usuario.",
            skill: { framework: "Next js", icon: <TbBrandNextjs size={20} /> },
            url: "",
            seeMore: false,
            rol: "The Data Age - Desarrollador Frontend",
            category: "profesional"

        },
        {
            title: "Administrador de Tareas",
            image: "/images/TaskManager.png",
            description: "Proyecto de estudio, aprendí mucho sobre la administración de estados globales con redux toolkit, mejoré mis conocimientos en Tailwinds para la administración de temas, colores y estilos. El diseño está centrado en la creación rápida de tareas y el control de estados de la actividad.",
            skill: { framework: "React js", icon: <FaReact size={20} /> },
            url: "https://to-do-react-ms.netlify.app",
            seeMore: true,
            category: "personal"
        },
        {
            title: "Administrador de Libros",
            image: "/images/FreeBook.png",
            description: "Proyecto de estudio para el manejo de libros, gestiona la lista de libros presentados a los usuarios en una galería y la colección personal de los usuarios. Aprendí a controlar la autenticación de usuarios con Auth0 con google, desde un correo gmail, al autenticarse el usario puede gestionar su propia galería, también utilicé Redux Toolkit.",
            skill: { framework: "React js", icon: <FaReact size={20} /> },
            url: "https://free-books-collection.netlify.app",
            seeMore: true,
            category: "personal"

        },
        {
            title: "Incompany SA",
            image: "/images/Incompany.png",
            description: "Proyecto desarrollado para empresa costarricense Incompany SA, colaboré como freelancer, dando servicios profesionales en la creación de una nueva sección para el sitio web.  El sitio web fue creado con WordPress, utilizando una plantilla en Elementor.",
            skill: { framework: "Wordpress", icon: <BsWordpress size={20} /> },
            url: "https://www.incompany.cr",
            seeMore: true,
            category: "servicio",
            rol: "Incompany SA - Desarrollador web"


        },
        {
            title: "Simplisoft",
            image: "/images/Simplisoft.png",
            description: "Sitio web desarrollado para empresa costarricense Incompany. Brinde servicios profesionales como desarrollador web, realicé el diseño y construcción del sitio web utilizando elementor, siguiendo los líeanimientos gráfios dados por el cliente.",
            skill: { framework: "Wordpress", icon: <BsWordpress size={20} /> },
            url: "https://simplisoftcr.com",
            seeMore: true,
            category: "servicio",
            rol: "Incompany SA - Desarrollador web"


        },
        {
            title: "Feria Nacional de la Tierra",
            image: "/images/FeriaNacionalTierra.png",
            description: "Mi primera experiencia laboral, tuve la oportunidad de cumplir con 3 meses de pasantía en Jóvenes Ambientalista, logré crear un sitio web para Feria Nacional de la tierra, un sitio informativo sobre la feria, construido con Elementor.",
            skill: { framework: "Wordpress", icon: <BsWordpress size={20} /> },
            url: "",
            seeMore: false,
            category: "profesional",
            rol: "Jóvenes ambientalistas - Desarrollador web"

        },
        {
            title: "TakTik Mentor",
            image: "/images/Taktikmentor hero.png",
            description: "Colaboré con Taktik Mentor en el desarrollo de su presencia en línea mediante la creación de una landing page utilizando WordPress. Trabajando en estrecha colaboración con el equipo de Taktik Mentor, diseñé y desarrollé una página web que reflejara la identidad de la marca y proporcionara una experiencia de usuario óptima.",
            skill: { framework: "Wordpress", icon: <BsWordpress size={20} /> },
            url: "https://taktikmentor.com/",
            seeMore: false,
            category: "servicio",
            rol: "Incompany SA - Desarrollador web"

        },
        {
            title: "Restos para Desarrolladores",
            image: "/images/DevChallenges.png",
            description: "Relicé un sitio web para recopilar varios retos de https://devchallenges.io, finalizando tres retos, el primero es Qr Code, se encarga de generar códigos QR de un url que el usuario proporcione, el segundo es Random Quote, se encarga de generar citas de autores desde una consulta fetch a una api y el último es un Multi-Step form, formulario con varios pasos.",
            skill: { framework: "React Js", icon: <FaReact size={20} /> },
            url: "https://ms-dev-challenges.netlify.app",
            seeMore: true,
            category: "personal"

        },
        {
            title: "Control de Deliverys",
            image: "/images/deliveryManager.png",
            description: "Proyecto de gestión de pedidos, use redux para la gestión global del estado de la aplicación, también la biblioteca DND-KIT para agregar la animación de ordenar manualmente las cajas de pedidos. Este proyecto me ayudó mucho en la interacción de pantallas de una forma fácil y ágil para  el usuario, dando al usuario atajos para ordenar sus pedidos.",
            skill: { framework: "React Js", icon: <FaReact size={20} /> },
            url: "https://deliverymanager.netlify.app",
            seeMore: true,
            category: "personal"

        },

    ]


    const data = [
        {
            label: "Experiencia profesional",
            value: "profesional",
            icon: <HiBriefcase size={20} color="blue-gray" />
        },
        {
            label: "Servicio profesional",
            value: "servicio",
            icon: <FaUserTie size={20} color="blue-gray" />,
        },
        {
            label: "Proyecto personal",
            value: "personal",
            icon: <FaLightbulb size={20} color="blue-gray" />,
        }
    ];

    return (
        <section id="projects">
            <motion.section
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                transition={{ type: "spring", delay: 1 }}
            >
                <div className="flex flex-col justify-center text-center">
                    <div className="grid place-items-center p-5 gap-5">
                        <Typography variant="h2" className="text-gray-800">Proyectos destacados</Typography>
                        <Typography className="text-gray-700 ">
                            A lo largo de mi carrera he tenido la oportunidad de participar en diversos proyectos que abarcan desde soluciones empresariales hasta desarrollos freelance y personales.
                        </Typography>
                    </div>
                    <div className="grid place-items-center sm:p-5 lg:p-10">
                        <Tabs value="profesional">
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
                                            {myprojects && myprojects?.filter(({ category }) => value ? category.includes(value) : true)
                                                .map(({ title, image, description, skill, seeMore, url, rol }, index) => (
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
                                                            <Typography color="orange" className="text-start">
                                                                {rol}
                                                            </Typography>
                                                            <Typography color="gray" className="mt-3 font-light text-start">
                                                                {description}
                                                            </Typography>
                                                        </CardBody>
                                                        <div className="flex items-end justify-col pl-5">
                                                            <Chip value={skill.framework} icon={skill.icon} />
                                                        </div>
                                                        <CardFooter className="flex justify-end">
                                                            {seeMore && (
                                                                <Button
                                                                    size="sm"
                                                                    className=" bg-orange-500"
                                                                    onClick={() => window.open(url, '_blank')}
                                                                >
                                                                    Ir a sitio
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




