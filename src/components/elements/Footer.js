import {
    Typography,
    Avatar,
} from "@material-tailwind/react";
import { BsWhatsapp, BsGithub } from "react-icons/bs";
import { ImLinkedin, ImInstagram } from "react-icons/im";
import { MdOutgoingMail } from 'react-icons/md'

export default function Footer() {

    const UrlInstagram = "https://instagram.com/marlonsanchez583?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="
    const UrlLinkedin = "https://www.linkedin.com/in/marlon-josué-sánchez-alemán-84688b1b6"
    const UrlWhatsapp = "https://wa.link/0wbnnc"
    const UrlGithub = "https://github.com/MarlonSanchez-Ale"

    return (
        <footer className=" py-32 sm:px-10">
            <div className="flex flex-col justify-center gap-10 text-center">
                <div className="grid place-items-center gap-3">
                    <Avatar
                        size="lg"
                        alt="avatar"
                        src="./images/foto2.png"
                        loading="lazy"
                        className="border border-orange-500 w-28 h-28 shadow-2xl bg-gray-200 ring-4 ring-gray-500/30 hover:ring-gray-200/30"
                    />
                    <div className="flex flex-col gap-3">
                        <Typography variant="h4" className="text-gray-800">
                            Marlon Sánchez
                        </Typography>
                        <Typography className="font-medium  text-gray-700" textGradient>
                            También me puedes seguir o contactar en mis redes sociales.
                        </Typography>
                        <div className="flex flex-row justify-center gap-4">
                            <MdOutgoingMail size={25} color="orange" />
                            <Typography className="font-medium text-orange-400 hover:text-orange-700" textGradient>
                                marlonsanchezal@gmail.com
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="group inline-flex flex-wrap justify-center gap-10">
                    <span onClick={() => window.open(UrlInstagram, '_blank')} className="cursor-pointer shadow-md rounded-full border border-gray-900/5 bg-gray-200/5 p-3 text-gray-900 transition-colors hover:border-orange-500 hover:!opacity-100 group-hover:opacity-70">
                        <ImInstagram size={20} color="orange" />
                    </span>
                    <span onClick={() => window.open(UrlLinkedin, '_blank')} className="cursor-pointer shadow-md rounded-full border border-gray-900/5 bg-gray-200/5 p-3 text-gray-900 transition-colors hover:border-orange-500 hover:!opacity-100 group-hover:opacity-70">
                        <ImLinkedin size={20} color="orange" />
                    </span>
                    <span onClick={() => window.open(UrlWhatsapp, '_blank')} className="cursor-pointer shadow-md rounded-full border border-gray-900/5 bg-gray-200/5 p-3 text-gray-900 transition-colors hover:border-orange-500 hover:!opacity-100 group-hover:opacity-70">
                        <BsWhatsapp size={20} color="orange" />
                    </span>
                    <span onClick={() => window.open(UrlGithub, '_blank')} className="cursor-pointer shadow-md rounded-full border border-gray-900/5 bg-gray-200/5 p-3 text-gray-900 transition-colors hover:border-orange-500 hover:!opacity-100 group-hover:opacity-70">
                        <BsGithub size={20} color="orange" />
                    </span>
                </div>

            </div>
        </footer >
    )
}