import { Avatar, Typography, IconButton} from "@material-tailwind/react"
import { BsInstagram, BsLinkedin, BsWhatsapp, BsGithub } from "react-icons/bs";
//import { IoLogoJavascript } from 'react-icons/io'
//BsFiletypeHtml, BsFiletypeCss, BsWordpress,
//import { TbBrandTypescript } from "react-icons/tb";
//import { FaReact } from 'react-icons/fa'
//import { TbBrandNextjs } from 'react-icons/tb'
//import { SiMui, SiTailwindcss } from 'react-icons/si'
import { motion, MotionConfig } from 'framer-motion'
import { BsPersonArmsUp, BsFillRocketTakeoffFill, BsFillEnvelopeFill } from "react-icons/bs";

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


export default function HomeSection() {

    const UrlInstagram = "https://instagram.com/marlonsanchez583?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="
    const UrlLinkedin = "https://www.linkedin.com/in/marlonsanchezal/"
    const UrlWhatsapp = "https://wa.link/0wbnnc"
    const UrlGithub = "https://github.com/MarlonSanchez-Ale"


    return (
        <MotionConfig transition={{ duration: 1 }}>
            <motion.section
                className="py-32"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                transition={{ type: "spring", delay: 1 }}
            >
                <div className="flex flex-col justify-center p-4 gap-5 text-center text-gray-100">
                    <div>
                        <Avatar
                            size="lg"
                            alt="avatar"
                            sizes={50}
                            loading="lazy"
                            src="./images/foto1.png"
                            className="border border-orange-500 w-40 h-40 shadow-2xl bg-gray-200 ring-4 ring-gray-200 hover:ring-gray-200/30"
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-5">
                        <div>
                            <Typography variant="h3" className="mb-2 text-gray-800" textGradient>
                                Marlon Sánchez
                            </Typography>
                            <Typography className=" font-light text-gray-700 lg:px-48" textGradient>
                                Ingeniero de Sistemas y Desarrollador Web, comprometido en convertir ideas en realidades
                                digitales mediante innovación y creatividad en cada línea de código que escribo. Mi pasión es dar
                                vida a proyectos con soluciones tecnológicas avanzadas y experiencias únicas en la web.
                            </Typography>
                        </div>
                        <div className="flex flex-row justify-center gap-5 ">
                            <IconButton onClick={() => window.open(UrlInstagram, '_blank')} variant="text" className="hover:bg-gray-100 hover:shadow-md">
                                <BsInstagram size={20} color="orange" />
                            </IconButton>
                            <IconButton onClick={() => window.open(UrlLinkedin, '_blank')} variant="text" className="hover:bg-gray-100 hover:shadow-md">
                                <BsLinkedin size={20} color="orange" />
                            </IconButton>
                            <IconButton onClick={() => window.open(UrlWhatsapp, '_blank')} variant="text" className="hover:bg-gray-100 hover:shadow-md">
                                <BsWhatsapp size={20} color="orange" />
                            </IconButton>
                            <IconButton onClick={() => window.open(UrlGithub, '_blank')} variant="text" className="hover:bg-gray-100 hover:shadow-md">
                                <BsGithub size={20} color="orange" />
                            </IconButton>
                        </div>
                        <div className="grid place-items-center my-10">
                            <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-flow-col" >
                                <a
                                    href="#aboutme"
                                    className="group relative flex w-52 items-center gap-3  overflow-hidden bg-blue-gray-900 hover:bg-orange-500 p-4 rounded-md shadow-md">
                                    Conoce sobre mí
                                    <span className="absolute right-0 w-12 grid place-items-center bg-blue-gray-800 group-hover:bg-orange-400 h-full">
                                        <BsPersonArmsUp color="white" size={25} />
                                    </span>
                                </a>
                                <a
                                    href="#projects"
                                    className="group relative flex w-52 items-center gap-3  overflow-hidden bg-blue-gray-900 hover:bg-orange-500 p-4 rounded-md shadow-md">
                                    Mis proyectos
                                    <span className="absolute right-0 w-12 grid place-items-center bg-blue-gray-800 group-hover:bg-orange-400 h-full">
                                        <BsFillRocketTakeoffFill color="white" size={25} />
                                    </span>
                                </a>
                                <a
                                    href="#contact"
                                    className="group relative flex w-52 items-center gap-3  overflow-hidden bg-orange-500 hover:bg-blue-gray-800 p-4 rounded-md shadow-md">
                                    Contactar ahora
                                    <span className="absolute right-0 w-12 grid place-items-center bg-orange-400 group-hover:bg-blue-gray-700 h-full">
                                        <BsFillEnvelopeFill color="white" size={25} />
                                    </span>
                                </a>


                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </MotionConfig>
    )
}

/*
<div className="grid place-items-center my-10">
                            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-flow-col" >
                                <Chip value="Javascript" className=" hover:bg-orange-500" icon={<IoLogoJavascript size={20} />} />
                                <Chip value="Typescript" className="hover:bg-orange-500" icon={<TbBrandTypescript size={20} />} />
                                <Chip value="React Js" className=" hover:bg-orange-500" icon={<FaReact size={20} />} />
                                <Chip value="Next Js" className=" hover:bg-orange-500" icon={<TbBrandNextjs size={20} />} />
                                <Chip value="HTML" className=" hover:bg-orange-500" icon={<BsFiletypeHtml size={20} />} />
                                <Chip value="CSS" className=" hover:bg-orange-500" icon={<BsFiletypeCss size={20} />} />
                                <Chip value="Talwind" className=" hover:bg-orange-500" icon={<SiTailwindcss size={20} />} />
                                <Chip value="Material UI" className="hover:bg-orange-500" icon={<SiMui size={18} />} />
                                <Chip value="Wordpress" className="hover:bg-orange-500 w-full" icon={<BsWordpress size={18} />} />
                            </div>
                        </div>

*/